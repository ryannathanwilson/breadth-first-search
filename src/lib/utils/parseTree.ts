const parseTree = (tree: number[]): number[][] => {
  // first row is row 0 => index 0
  // second row is row 1 => index 1-2
  // third row is row 2 => index 3-4-5-6
  const arrayOfArrays = []
  let rowIndex = 0;
  let index = 0;
  while (index < tree.length) { // eslint-disable-line
    const numberOfEntries = 2 ** rowIndex;
    const row = [];
    for (let i = 0; i < numberOfEntries; i++) {
      if (index + i > tree.length) break;
      row.push(tree[index + i])
    }

    arrayOfArrays.push(row);
    rowIndex++;
    index += numberOfEntries
    if (index > tree.length) break;
  }
  return arrayOfArrays;
}

export default parseTree;

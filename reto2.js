function createFrame(names) {
  const cantLetterA = Math.max(...names.map(n => n.length));
  const marcoIF = '*'.repeat(cantLetterA + 4)
  let frameTemplate = marcoIF + '\n';
  for (let n of names) {
    let space = ' '.repeat(cantLetterA - n.length);
    frameTemplate += '* ' + n + space + ' *' + '\n';
  }
  frameTemplate += marcoIF;
  return frameTemplate;
}
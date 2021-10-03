
export default function countCats(backyard) {
  return backyard.reduce((acc, el) => el.filter(item => item === '^^').length + acc, 0);
}



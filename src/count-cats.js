import { NotImplementedError } from '../extensions/index.js';

export default function countCats(/* matrix */) {
  function countCats(backyard) {
    return backyard.filter((el) => el.includes('^^')).length;
  }
}



//import { NotImplementedError } from '../extensions/index.js';

module.exports = function countCats(backyard) {
 return backyard.filter((el) => el.includes('^^')).length;
}


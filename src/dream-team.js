import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  const createDreamTeam = (members) => {
    if (typeof(members) !== 'object') return false;
    members = members.filter((el) => typeof(el) === 'string' && el.trim()[0].toUpperCase() === el.trim()[0]).sort().map(el => el[0]).join('');
    return members ? members : false;
  }
}

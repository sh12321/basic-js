import { NotImplementedError } from '../extensions/index.js';


const createDreamTeam = (members) => {
  if (typeof(members) !== 'object') return false;
  members = members.filter((el) => typeof(el) === 'string' && el.trim()[0].toUpperCase() === el.trim()[0]).map(el => el.trim()[0]).sort().join('');
  return members;
}


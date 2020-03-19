module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members.filter(name => typeof name == 'string')
    .map(name => name.trim().charAt(0).toUpperCase())
    .sort()
    .join('');
};
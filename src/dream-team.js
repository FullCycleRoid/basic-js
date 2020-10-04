const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if ( !Array.isArray(members)) {
    return false
  }

  let newArr = []
  let dreamTeamName = ''
  for (let i=0; i<members.length; i++) {
    if (typeof(members[i]) == 'string') {
      let str = members[i].replace(/\s/g, '')
      newArr.push(str[0].toUpperCase())
    } else {
      continue;
    }
  }
  newArr.sort()
  for (let i=0; i<newArr.length; i++){
    dreamTeamName += newArr[i]
  }

  return dreamTeamName
};

/**
 * create an instance that sort the users by the colors
 * @param {*} groups
 * @param {*} color
 * @returns Object
 */
const getUserByColor = (groups, color) => {
  let newGroup = new Map();
  for (let [k, values] of groups) {
    for (let [name, color] of Object.entries(values)) {
      if (newGroup.has(color)) {
        // removing the doublicate name with set
        newGroup.set(color, [...newGroup.get(color), name]);
      } else {
        newGroup.set(color, [name]);
      }
    }
  }
  if (color) {
    return { [color]: newGroup.get(color) };
  }
  return Object.fromEntries(newGroup);
};

/**
 * if someone already exist in a group change that person color to the
 * entered color and create a new group
 * @param {*} groups
 * @param {*} values
 * @returns Object
 */
const searchUserForExist = (groups, values) => {
  // if nama already exist find and update the color of that group
  let users = new Map(Object.entries(values));
  for (let [name, color] of users) {
    for ([group, prop] of groups) {
      if (prop[name]) {
        prop[name] = color;
        delete values[name];
      }
    }
  }
  // creating a group to show the users
  if (Object.keys(values).length > 0) {
    groups.set(`Group${groups.size + 1}`, values);
  }
  return Object.fromEntries(groups);
};

const getUserByGroups = (groups) => {
  let newGroup = new Map();
  for (let [k, values] of groups) {
    newGroup.set(k, []);
    for (let [name] of Object.entries(values)) {
      //add all the name in a tempory array
      newGroup.get(k).push(name);
    }
  }
  return Object.fromEntries(newGroup);
};

module.exports = {
  getUserByColor,
  searchUserForExist,
  getUserByGroups,
};

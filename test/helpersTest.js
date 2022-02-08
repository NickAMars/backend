const assert = require("assert");
const helpers = require("../helpers");
const data = require("./data");

describe("Methods ", () => {
  it(`getUserByColor - collect user by color`, () => {
    const result = Object.keys(helpers.getUserByColor(data.groups, data.color));
    assert(result.pop(), data.color);
  });
  it(`getUserByGroups - collect the user by group`, () => {
    const result = helpers.searchUserForExist(data.groups, data.newGroup);
    // console.log(data.groups.size + 1, result.groups.size)
    assert(data.groups.size + 1, Object.keys(result).length);
  });

  it(`searchUserForExist - modify color of existing users and addnew group`, () => {
    const result = Object.entries(helpers.getUserByGroups(data.groups));
    //is there a group in the result without the
    const isGroup =
      !result.some(([groupName]) => data.groups.get(groupName).length === 0) &&
      data.groups.size === result.length;
    console.log();
    assert(isGroup);
  });
});

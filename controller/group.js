const joi = require("@hapi/joi");
const { find } = require("../mongodb/models/group");
const helper = require("../helpers");
const Group = require(`../mongodb/models/group`);
/**
 * Get all of group data
 * @query  color
 */
const getAllUser = async (req, res) => {
  const schema = joi.object({
    color: joi.string().allow(null, ""),
  });
  const { error, value } = schema.validate(req.query);
  if (error) {
    // bad request 400
    return res
      .status(400)
      .send({ url: req.originalUrl, message: error.message });
  }
  try {
    // collects the value for the group
    const data = await Group.findOne();
    // there is no data available
    if (data === null || data === undefined)
      return res.send({ color: {}, groups: {} });
    const result = helper.getUserByColor(data.groups, value.color);
    if (!value.color) {
      const groups = helper.getUserByGroups(data.groups);
      return res.send({
        colors: result,
        groups,
      });
    } else {
      return res.send(result);
    }
  } catch (err) {
    // return a log of the error
    return res.status(500).send({ url: req.originalUrl, message: err.message });
  }
};

/**
 * create a group for the user
 * @body
 * {    [Group]: { [Name]: [Color] , ...}   }
 */
const createGroup = async (req, res) => {
  const schema = joi.array().items(
    joi.object({
      name: joi.string().required(),
      color: joi.string().required(),
    })
  );
  const { error, value } = schema.validate(req.body);
  // if value is not an object
  if (error) {
    // bad request 400
    return res
      .status(400)
      .send({ url: req.originalUrl, message: error.message });
  }
  try {
    // collects the value for the group
    const data = await Group.findOne();
    // if nama already exist find and update the color of that group
    if (data === null || data === undefined) {
      const groups = new Group({ groups: helper.createMapNameColor(value) });

      await groups.save();
      // await Group.findByIdAndUpdate({ _id: data._id }, { groups: group });
    } else {
      const groups = helper.searchUserForExist(data.groups, value);
      // update the existing group
      await Group.findByIdAndUpdate({ _id: data._id }, { groups });
    }
    return res.status(204).send();
  } catch (err) {
    // return a log of the error
    return res.status(500).send({ url: req.originalUrl, message: err.message });
  }
};

module.exports = {
  getAllUser,
  createGroup,
};

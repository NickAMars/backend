const groups = new Map(
  Object.entries({
    Group1: {
      John: "Blue",
      Peter: "Green",
    },
    Group2: {
      Jane: "Red",
      May: "Green",
    },
    Group3: {
      Howard: "Blue",
      Nguyen: "Red",
      Lim: "Green",
    },
  })
);

const color = "Red";

const newGroup = [
  {
    color: "Blue",
    name: "Nick",
  },
  {
    color: "Orange",
    name: "David",
  },
];

module.exports = {
  groups,
  color,
  newGroup,
};

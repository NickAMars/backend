const groups = new Map(
  Object.entries({
    Group1: {
      John: "Blue",
      Peter: "Green",
      Nick: "Red",
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

const sameNameDifferentColor = [
  {
    color: "Blue",
    name: "Nick",
  },
];

const expectMap = {
  Group1: {
    Nick: "Blue",
    David: "Orange",
  },
};

module.exports = {
  groups,
  color,
  newGroup,
  expectMap,
  sameNameDifferentColor,
};

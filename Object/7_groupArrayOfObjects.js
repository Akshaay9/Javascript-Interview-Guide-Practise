const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

const endorseIt = (object) => {
  let result = [];
  const map = new Map();

  const recurse = (obj) => {
    for (let userNameSkills of obj) {
      const { skill, user } = userNameSkills;
      if (!map.has(user)) {
        const newResult = {
          user,
          skillsSet: [skill],
        };
        result.push(newResult);
        map.set(user);
      } else {
        result = result.map((ele) =>
          ele.user === user
            ? { ...ele, skillsSet: [...ele.skillsSet, skill] }
            : ele
        );
      }
    }
  };
  recurse(object);
  return result;
};

console.log(endorseIt(endorsements));

// [
//   { user: 'Bill', skillsSet: [ 'css', 'javascript' ] },
//   { user: 'Chad', skillsSet: [ 'javascript' ] },
//   { user: 'Sue', skillsSet: [ 'css', 'javascript', 'html' ] }
// ]

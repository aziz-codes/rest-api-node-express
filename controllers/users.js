const users = [
  { name: "user1", email: "user1@gmail.com" },
  { name: "user2", email: "user2@gmail.com" },
  { name: "user3", email: "user3@gmail.com" },
  { name: "user4", email: "user4@gmail.com" },
  { name: "user5", email: "user5@gmail.com" },
];

export const getUsers = (req, res) => {
  res.send(users);
};
export const saveUser = (req, res) => {
  const { name, email } = req.body;
  if (name.length < 3 || name === "") {
    res.send("Name must be more than 3 chars");
  } else if (email === "" || email.length < 4) {
    res.send("Email must be more than 4 chars");
  } else if (!email.endsWith(".com")) {
    res.send("Please provide a vallid email");
  } else {
    users.push({ name, email });
    res.send(users);
  }
};

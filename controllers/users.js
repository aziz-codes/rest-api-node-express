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

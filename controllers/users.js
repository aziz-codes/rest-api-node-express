import user from "../user.json" assert { type: "json" };

export const getUsers = (req, res) => {
  res.send(user);
};

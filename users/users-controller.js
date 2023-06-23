import * as usersDao from "./users-dao.js";

function UsersController(app) {
  const findAllUsers = async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    if (username && password) {
      const user = await usersDao.findUserByCredentials(username, password);
      if (user) {
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    } else if (username) {
      const user = await usersDao.findUserByUsername(username);
      if (user) {
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    } else {
      const users = await usersDao.findAllUsers();
      res.json(users);
    }
  };

  const findUserById = async (req, res) => {
    const id = req.params.id;
    const user = await usersDao.findUserById(id);
    res.json(user);
  };

  const createUser = async (req, res) => {
    const newUser = await usersDao.createUser(req.body);
    res.json(newUser);
  };

  const deleteUser = async (req, res) => {
    const id = req.params.id;
    await usersDao.deleteUser(id);
    res.sendStatus(200);
  };

  const updateUser = async (req, res) => {
    const id = req.params.id;
    const status = await usersDao.updateUser(id, req.body);
    res.json(status);
  };

  app.get("/users", findAllUsers);
  app.get("/users/:id", findUserById);
  app.post("/users", createUser);
  app.delete("/users/:id", deleteUser);
  app.put("/users/:id", updateUser);
}

export default UsersController;

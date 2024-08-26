// import { autor } from "../models/Autor.js";
import data from '../../data/users.json' assert { type: "json" };

class UserController {

  static async getUsers (req, res) {
    try {
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static async getUserById (req, res) {
    try {
      const id = req.params.id;
      const user = data.users.find((user) => user.id === id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

export default UserController;

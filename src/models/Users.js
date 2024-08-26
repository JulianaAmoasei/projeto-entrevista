import data from '../../data/users.json' assert { type: "json" };

class Users {
  static getUsers() {
    return data;
  }

  static getUserById(id) {
    return data.users.find((user) => user.id === id);
  }
}

export default Users;

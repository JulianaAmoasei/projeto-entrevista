import data from '../../data/users.json' assert { type: "json" };
import Music from "./Music.js";

const musicList = Music.getMusic();

class Users {
  static getUsers() {
    return data;
  }

  static getUserById(id) {
    return data.users.find((user) => user.id === id);
  }

  static getAllSongs(id) {
    const user = this.getUserById(id);
    return user.listened.map((song) => {
      const music = musicList.music.find((music) => music.id === song.songId);      
      return music.title;
    })
  }

  static getAllGenres(id) {
    const user = this.getUserById(id);
    const genres = user.listened.map((song) => {
      const music = musicList.music.find((music) => music.id === song.songId);    
      return music.genre;
    })
    return [...new Set(genres)]
  }
 
  static getFavoriteGenre(id) {
    const user = this.getUserById(id);

    const obj = {};

    user.listened.forEach((song) => {
      const music = musicList.music.find((music) => music.id === song.songId);
      obj[music.genre] = (obj[music.genre] || 0) + 1;
    })

    const favGenre = Object.entries(obj).sort(([,a],[,b]) => b-a)
    return favGenre[0][0];
  }
}

export default Users;

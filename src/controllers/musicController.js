import data from '../../data/music.json' assert { type: "json" };

class MusicController {

  static async getMusic (req, res) {
    try {
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static async getMusicById (req, res) {
    try {
      const id = req.params.id;
      const music = data.music.find((music) => music.id === id);
      res.status(200).json(music);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

export default MusicController;
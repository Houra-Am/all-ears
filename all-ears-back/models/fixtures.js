require("dotenv").config();

const bcryptjs = require("bcryptjs");
const User = require("./users");
const PodcastsLikes = require("./podcasts_likes");
const sequelize = require("../services/sequelize");

async function createUser() {
  try {
    await User.create({
      email: "jane@gmail.com",
      username: "Jane",
      password: bcryptjs.hashSync("janetest"),
      profil_img: "jane.png",
    });
    console.log("User Jane created!");
  } catch (err) {
    console.log(err);
  }
}

async function createLikes() {
  try {
    await PodcastsLikes.bulkCreate([
      { fk_user_id: 1, podcast_id: "7de578c61c5b43788af01b71dee66fd2" },
      {
        fk_user_id: 1,
        podcast_id: "b300121e4a224fc7be5fe7fcb322a4e9",
      },
      {
        fk_user_id: 1,
        podcast_id: "4e2bd6fab99a4e268b4470bfd4aca599",
      },
      {
        fk_user_id: 1,
        podcast_id: "68660f76903348f39162cf53e5d2ec82",
      },
    ]);
    console.log("Likes podcast for Jane created!");
  } catch (err) {
    console.log(err);
  }
}

createUser();
createLikes();

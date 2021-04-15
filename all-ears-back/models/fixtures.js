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
      {
        fk_user_id: 1,
        podcast_id: "e8b52010c95b4ab18b34dc9a2f5902c9"
      },
      {
        fk_user_id: 1,
        podcast_id: "be8917211b0045fd96b8ada0f0e4b79d",
      },
      {
        fk_user_id: 1,
        podcast_id: "dbcc884f28d34d6e8bd06f4e4af249aa",
      },
      {
        fk_user_id: 1,
        podcast_id: "83cccaf5913b4b7491c9c7c03a887bb1",
      },
      {
        fk_user_id: 1,
        podcast_id: "1e802717fb6548d98263bd9d58facbba",
      },

    ]);
    console.log("Likes podcast for Jane created!");
  } catch (err) {
    console.log(err);
  }
}

createUser();
createLikes();

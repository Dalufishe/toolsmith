const mongoose = require("mongoose");

const MONGODB_SERVER = "mongodb://127.0.0.1:27017/simple-blog-system";
const MONGODB_INIT = () => {
  mongoose.connect(MONGODB_SERVER);
};

module.exports = {
  MONGODB_SERVER,
  MONGODB_INIT,
};

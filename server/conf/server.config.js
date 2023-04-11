const NODE_API_SERVER = {
  port: 8000,
  url: "http://localhost:8000",
};

NODE_API_SERVER.url = `http://localhost:${NODE_API_SERVER.port}`;

module.exports = NODE_API_SERVER;

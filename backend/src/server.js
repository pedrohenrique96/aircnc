const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const socketio = require('socket.io')
const http = require('http')
const port = process.env.PORT || 3333;
const routes = require("./Routes/routes");

require("./database/database");


const app = express();
const server = http.Server(app)
const io = socketio(server)

const connectedUser = {}

io.on('connection', socket => {
  const { user_id } = socket.handshake.query
  connectedUser[user_id] = socket.id
})

app.use((req, res, next) => {
  req.io = io
  req.connectedUser = connectedUser

  return next()
}) 

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "Uploads")));

app.use(routes);

server.listen(port, () => console.log(`Port ${port}`));

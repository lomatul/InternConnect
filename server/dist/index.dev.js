"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _studentRoutes = _interopRequireDefault(require("./routes/student.routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

var connection = function connection() {
  return regeneratorRuntime.async(function connection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'InterConnect'
          }));

        case 3:
          console.log("Connected to database successfully!");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use((0, _cors["default"])({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use("/InterConnect/student", _studentRoutes["default"]);
app.use(function (err, req, res, next) {
  var errorStatus = err.status || 500;
  var errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});
app.listen(4000, function () {
  connection();
  console.log("Server is running on Port 4000");
});
const express = require("express");
const dotenv = require("dotenv");
var indexRouter = require("./routes/index");
var studentsRouter = require("./routes/studentRoutes");
var schoolsRouter = require("./routes/schoolRoutes");
var classesRouter = require("./routes/classroomRoutes");
var userRouter = require("./routes/userRoutes");
const dbConnection = require("./models/dbConnection");

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use("/", indexRouter);
app.use("/students", studentsRouter);
app.use("/schools", schoolsRouter);
app.use("/classes", classesRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

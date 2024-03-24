const express = require("express");
const dotenv = require("dotenv");
const indexRouter = require("./routes/index");
const studentsRouter = require("./routes/studentRoutes");
const schoolsRouter = require("./routes/schoolRoutes");
const classesRouter = require("./routes/classroomRoutes");
const userRouter = require("./routes/userRoutes");
const authMiddleware = require("./middlewares/authMiddleware");

const dbConnection = require("./models/dbConnection");

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use("/", indexRouter);
app.use("/students", authMiddleware.isAuthenticated, studentsRouter);
app.use("/schools", authMiddleware.isAuthenticated, schoolsRouter);
app.use("/classes", authMiddleware.isAuthenticated, classesRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

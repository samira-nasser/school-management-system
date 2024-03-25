const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
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

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

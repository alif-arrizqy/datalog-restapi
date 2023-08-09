import express from "express";
import cors from "cors";
import router from "./routers";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
  })
);

app.use('/', router());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
    data: "Hello World!",
  });
});

app.listen(3999, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:3999`)
);

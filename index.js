const express = require("express");
const data = require("./MOCK_DATA.json");
const { ConnectDB } = require("./config");
const authRouter = require("./router/Auth");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173", // Must match frontend origin
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/", authRouter);


app.get("/", (req, res) => {
  return res.send("Hello");
});

ConnectDB();

app.listen(8000, () => console.log("Start at 8000"));

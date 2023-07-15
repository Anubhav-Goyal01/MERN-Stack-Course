const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
// const userRouter = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
// app.use("/user", userRouter);

mongoose.connect("YOUR_MONGODB_CONNECTION_STRING", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "leetcode-clone",
});

app.listen(3000, () => console.log("Server running on port 3000"));

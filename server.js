const express = require("express");
const app = express();
const port = 8001;

const homeRoutes = require("./routes/home.routes");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

app.use("/", homeRoutes);
app.use("/user", userRoutes);
app.use("/post", postRoutes);

app.listen(port, () => {
  console.log(`Server listening listening on port ${port}`);
});

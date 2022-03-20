const mongoose = require("mongoose");
const DB =
  "mongodb+srv://prabhakarkashyapjha:prabhakar123@cluster0.s794l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((error) => {
    console.log(error.message);
  });

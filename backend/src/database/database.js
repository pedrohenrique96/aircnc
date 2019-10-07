const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  });
} catch (err) {
  console.log(err);
}

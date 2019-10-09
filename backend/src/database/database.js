const mongoose = require("mongoose");

try {
  mongoose.connect('mongodb+srv://pedrook16:ba0896@P@cloneinstagram-iubz8.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (err) {
  console.log(err);
}

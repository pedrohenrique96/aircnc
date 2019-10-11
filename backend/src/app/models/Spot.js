const { Schema, model } = require("mongoose");

const SpotSchema = new Schema(
  {
    thumbnail: String,
    url: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.pre("save", function() {
   if(!this.url) {
     this.url = `http://localhost:3333/files/${this.thumbnail}`;
   }
});

module.exports = model("Spot", SpotSchema);

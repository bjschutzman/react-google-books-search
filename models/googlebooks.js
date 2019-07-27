const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    tite: { type: String, required: true },
    authors: { type: String, require: true },
    description: { type: String },
    image: {type: String},
    link: { type: String }
});

const googlebooks = mongoose.model("googleBooks", bookSchema);

module.exports = googlebooks;
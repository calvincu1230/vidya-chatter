const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  passwordDigest: {
    type: String,
    required: true
  },
  sessionId: {
    type: Schema.Types.ObjectId,
    ref: 'Session',
    default: null
  }
})
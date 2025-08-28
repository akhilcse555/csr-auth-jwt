import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true },
    email:   { type: String, required: true, unique: true },
    password:{ type: String, required: true },
  },
  { timestamps: true }
);

// Third argument forces the collection name to 'userAuth'
const User = mongoose.model('userAuth', userSchema, 'userAuth');

export default User;

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true },
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmation: { type: Boolean, required: true },
    theme: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const users = mongoose.models.users || mongoose.model('users', userSchema);

export default users;

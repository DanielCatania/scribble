import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;

export default db;

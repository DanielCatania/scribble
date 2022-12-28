/* eslint-disable no-console */
import jwt from 'jsonwebtoken';
import db from '../../../src/api/config/db';
import UserDB from '../../../src/api/models/users';

export default async function handler(req, res) {
  try {
    db.on('error', () => console.error('database connection error'));
    db.once('open', () => console.log('database connection successfully'));

    const { accessToken } = JSON.parse(req.body);

    const data = jwt.verify(accessToken, process.env.KEY);
    const id = data['_id'];

    const user = await UserDB.findById(id);

    const newTheme = user.theme === 'light' ? 'dark' : 'light';
    await UserDB.findByIdAndUpdate(id, { $set: { theme: newTheme } });

    res.status(200).json({
      message: 'Changed Theme Successfully', theme: newTheme,
    });
  } catch (err) {
    const error = err.message.split(':');
    res.status(error[1] || 500).json({ message: error[0] || err.message });
  }
}

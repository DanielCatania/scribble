/* eslint-disable no-console */
import jwt from 'jsonwebtoken';
import UserDB from '../../src/api/models/users';
import db from '../../src/api/config/db';

export default async function handler(req, res) {
  try {
    db.on('error', () => console.error('database connection error'));
    db.once('open', () => console.log('database connection successfully'));
    const { refreshToken } = JSON.parse(req.body);

    const userData = jwt.verify(refreshToken, process.env.KEY);

    const user = await UserDB.findOne().where('email').equals(userData.email);

    if (!user) throw new Error('User Not Found:404');

    const accessToken = jwt.sign(user['_doc'], process.env.KEY, {
      expiresIn: '60s',
    });

    res.status(200).json({
      message: ' New Access Token Successfully Created', accessToken,
    });
  } catch (err) {
    const error = err.message.split(':');
    res.status(error[1] || 500).json({ message: error[0] || err.message });
  }
}

/* eslint-disable no-console */
import jwt from 'jsonwebtoken';
import UserDB from '../../../src/api/models/users';
import db from '../../../src/api/config/db';

export default async function handler(req, res) {
  try {
    db.on('error', () => console.error('database connection error'));
    db.once('open', () => console.log('database connection successfully'));
    const { accessToken } = JSON.parse(req.body);

    const userData = jwt.verify(accessToken, process.env.KEY);

    const user = await UserDB.findOne().where('email').equals(userData.email);

    if (!user) throw new Error('User Not Found:404');

    if (userData.password !== user.password) throw new Error('Wrong password:400');

    const newAccessToken = jwt.sign(user['_doc'], process.env.KEY, {
      expiresIn: '60s',
    });
    const refreshToken = jwt.sign({ id: user['_id'], name: user.name, email: user.email }, process.env.KEY, {
      expiresIn: '14d',
    });

    user.password = 'private';

    res.status(200).json({
      message: 'Successful Login', user, newAccessToken, refreshToken,
    });
  } catch (err) {
    const error = err.message.split(':');
    res.status(error[1] || 500).json({ message: error[0] || err.message });
  }
}

/* eslint-disable no-console */
import { createHash } from 'crypto';
import jwt from 'jsonwebtoken';
import UserDB from '../../src/api/models/users';
import verifyPassword from '../../src/utils/verifyPassword';
import db from '../../src/api/config/db';

export default async function handler(req, res) {
  if (req.method.toUpperCase() !== 'POST') {
    res.status(400).json({ message: 'This route only accepts POST method requests.' });
    return;
  }
  try {
    db.on('error', () => console.error('database connection error'));
    db.once('open', () => console.log('database connection successfully'));
    const userData = JSON.parse(req.body).user;
    const emails = await UserDB.distinct('email');

    emails.forEach((email) => {
      if (email === userData.email) throw new Error('This account already exists in the system.:400');
    });

    const user = new UserDB(userData);
    user.name.first = user.name.first.toLowerCase();
    user.name.last = user.name.last.toLowerCase();
    user.confirmation = false;
    user.theme = 'light';

    const verification = verifyPassword(user.password);
    if (verification !== undefined) throw new Error(`${verification}:400`);

    user.password = createHash('sha256').update(`${user.password}:${user['_id']}`).digest('hex');

    const accessToken = jwt.sign(user['_doc'], process.env.KEY, {
      expiresIn: '60s',
    });

    const refreshToken = jwt.sign({ id: user['_id'], name: user.name, email: user.email }, process.env.KEY, {
      expiresIn: '14d',
    });

    await user.save();

    res.status(200).json({
      message: 'User Created Successfully', user, accessToken, refreshToken,
    });
  } catch (err) {
    const error = err.message.split(':');
    res.status(error[1] || 500).json({ message: error[0] || err.message });
  }
}

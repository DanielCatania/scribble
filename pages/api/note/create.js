/* eslint-disable no-console */
import jwt from 'jsonwebtoken';
import NoteDB from '../../../src/api/models/notes';
import db from '../../../src/api/config/db';

export default async function handler(req, res) {
  try {
    db.on('error', () => console.error('database connection error'));
    db.once('open', () => console.log('database connection successfully'));

    const { accessToken } = JSON.parse(req.body);
    const noteData = JSON.parse(req.body).note;

    const userData = jwt.verify(accessToken, process.env.KEY);
    const authorId = userData['_id'];

    const note = new NoteDB({ authorId, ...noteData });

    await note.save();

    res.status(200).json({
      message: 'Note Created Successfully', note,
    });
  } catch (err) {
    const error = err.message.split(':');
    res.status(error[1] || 500).json({ message: error[0] || err.message });
  }
}

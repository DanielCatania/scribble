import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, default: 'add title' },
    content: { type: String, default: '' },
  },
  {
    versionKey: false,
  },
);

const notes = mongoose.models.notes || mongoose.model('notes', noteSchema);

export default notes;

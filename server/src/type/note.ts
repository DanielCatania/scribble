export interface INoteContent {
  content: string;
}

export interface INoteBase extends INoteContent {
  id: string;
  userId: string;
}

export interface INote extends INoteBase {
  createAt: Date;
  updateAt: Date;
}

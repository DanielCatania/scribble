export interface INoteContent {
  title: string;
  selected: boolean;
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

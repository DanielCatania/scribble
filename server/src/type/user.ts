export interface IUserContent {
  name: string;
  email: string;
  password: string;
}

export interface IUser extends IUserContent {
  id: number;
  salt: string;
}

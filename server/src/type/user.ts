export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserContent extends IUserCredentials {
  name: string;
}

export interface IUser extends IUserContent {
  id: string;
  salt: string;
}

export interface IUserTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUserIdentity {
  id: string;
  email: string;
  name: string;
}

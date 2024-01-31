export interface ILogin {
  email: string,
  password: string
}

export interface IUser {
  id: number,
  userName: string,
  role: string,
  email: string,
  password: string
}

export type IUserResponse = Omit<IUser, 'password'>;

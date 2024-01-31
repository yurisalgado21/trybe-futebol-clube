import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
// import { IUser } from '../Interfaces/users/IUser';
import UserModel from '../models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { ServiceResponse, ServiceResponseError } from '../Interfaces/ServiceResponse';

type LoginResponse = {
  token: string
};

export default class UserService {
  private static readonly invalidCredentialsResponse: ServiceResponseError = {
    status: 'UNAUTHORIZED',
    data: { message: 'Invalid email or password' } };

  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async login(email: string, password: string): Promise<ServiceResponse<LoginResponse>> {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email) || password.length < 6) {
      return UserService.invalidCredentialsResponse;
    }
    const user = await this.userModel.findByEmail(email);
    if (!user) return UserService.invalidCredentialsResponse;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return UserService.invalidCredentialsResponse;
    const payload = { sub: user.id, role: user.role, email: user.email };
    const secret = process.env.JWT_SECRET ?? 'secret';
    const token = jwt.sign(payload, secret, { expiresIn: '7d' });
    return {
      status: 'SUCCESSFUL',
      data: { token },
    };
  }
}

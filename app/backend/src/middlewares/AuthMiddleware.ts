import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export default class ValidateLogin {
  static handle(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const [type, token] = req.headers.authorization.split(' ');
    if (type !== 'Bearer') {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    try {
      const secret = process.env.JWT_SECRET ?? 'secret';
      const payload = jwt.verify(token, secret);
      res.locals.auth = payload;
    } catch (error) {
      return res.status(401).json({ message: 'Invalid Token' });
    }
    next();
  }

  static validate(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });
    next();
  }
}

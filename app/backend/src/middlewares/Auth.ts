import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export default class Auth {
  static handle(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const [type, token] = req.headers.authorization.split(' ');
    if (type !== 'Bearer') {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    const secret = process.env.JWT_SECRET ?? 'secret';
    const payload = jwt.verify(token, secret);
    res.locals.auth = payload;
    return res.status(200).json(res.locals.auth);

    next();
  }
}

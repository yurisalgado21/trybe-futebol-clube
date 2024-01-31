import { Router } from 'express';
import ValidateLogin from '../middlewares/AuthMiddleware';
import UsersControllers from '../controllers/UserControllers';
import UserService from '../services/UserService';
import UserModel from '../models/UserModel';
import Auth from '../middlewares/Auth';

const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UsersControllers(userService);

const router = Router();

router.get('/role', Auth.handle);
router.post('/', ValidateLogin.validate, (req, res) => userController.login(req, res));

export default router;

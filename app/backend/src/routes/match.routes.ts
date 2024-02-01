import { Request, Router, Response } from 'express';
import ValidateLogin from '../middlewares/AuthMiddleware';
import MatchController from '../controllers/MatchController';

const matchController = new MatchController();

const router = Router();

router.get('/', (req: Request, res: Response) => matchController.findAllMatches(req, res));
router.patch('/:id/finish', ValidateLogin.handle, (
  req: Request,
  res: Response,
) => matchController.updateMatch(req, res));

export default router;

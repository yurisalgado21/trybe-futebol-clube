import { Request, Response, Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchController = new MatchController();

const router = Router();

router.get('/', (req: Request, res: Response) => matchController.leaderBoard(req, res));
router.get('/home', (req: Request, res: Response) => matchController.leaderBoardHome(req, res));
router.get('/away', (req: Request, res: Response) => matchController.leaderBoardAway(req, res));

export default router;

import { Router } from 'express';
import teamRouter from './team.routes';
import userRouter from './users.routes';
import matchRouter from './match.routes';
import leaderBoardRouter from './leaderboard.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/login', userRouter);
router.use('/matches', matchRouter);
router.use('/leaderboard', leaderBoardRouter);

export default router;

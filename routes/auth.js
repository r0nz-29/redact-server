import {Router} from 'express';
import {getMe, guestLogin, loginUser, registerUser} from "../controllers/user.js";
import {PROTECTED} from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/login/guest', guestLogin);
router.get('/me', PROTECTED, getMe);

export default router;
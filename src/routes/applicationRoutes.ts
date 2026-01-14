import { Router } from 'express';
import { getApplications, createApplication } from '../controllers/applicationController';

const router = Router();

router.get('/', getApplications);
router.post('/', createApplication);

export default router;

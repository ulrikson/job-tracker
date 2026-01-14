import { Router } from 'express';
import { getApplications, createApplication, updateApplication } from '../controllers/applicationController';

const router = Router();

router.get('/', getApplications);
router.post('/', createApplication);
router.put('/:id', updateApplication)

export default router;

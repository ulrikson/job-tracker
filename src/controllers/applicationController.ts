import { Response } from 'express';
import prisma from '../lib/prisma';
import { AuthRequest } from '../middleware/authMiddleware';

/**
 * Get all applications for the authenticated user.
 */
export const getApplications = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;

    const applications = await prisma.jobApplication.findMany({
      where: { userId },
    });

    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(503).json({
      status: 'error',
      message: "Couldn't fetch applications",
    });
  }
};

export const createApplication = async (req: AuthRequest, res: Response) => {
  try {
    const { company, link } = req.body;
    const userId = req.user?.userId;

    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const newApplication = await prisma.jobApplication.create({
      data: {
        company,
        link,
        userId: userId, // Use the authenticated user's ID
      },
    });

    res.status(201).json(newApplication);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: "Couldn't create application",
    });
  }
};

export const updateApplication = async (req: AuthRequest, res: Response) => {
  try {
    const { company, link } = req.body;
    const userId = req.user?.userId;
    const applicationId = Number(req.params.id);

    // Verify ownership before updating
    // Laravel policies would be great here (e.g., $this->authorize('update', $application))
    const existingApplication = await prisma.jobApplication.findUnique({
      where: { id: applicationId },
    });

    if (!existingApplication) {
      res.status(404).json({ message: 'Application not found' });
      return;
    }

    if (existingApplication.userId !== userId) {
      res.status(403).json({ message: 'Unauthorized action' });
      return;
    }

    const newApplication = await prisma.jobApplication.update({
      where: { id: applicationId },
      data: { company, link },
    });

    res.status(201).json(newApplication);
  } catch (error: any) {
    console.error(error);

    if (error.code === 'P2025') {
      res.status(404).json({
        status: 'error',
        message: "Couldn't find application",
      });
      return;
    }

    res.status(500).json({
      status: 'error',
      message: "Couldn't update application",
    });
  }
};

export const deleteApplication = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const applicationId = Number(req.params.id);

    // Verify ownership
    const existingApplication = await prisma.jobApplication.findUnique({
      where: { id: applicationId },
    });

    if (!existingApplication) {
      res.status(404).json({ message: 'Application not found' });
      return;
    }

    if (existingApplication.userId !== userId) {
      res.status(403).json({ message: 'Unauthorized action' });
      return;
    }

    await prisma.jobApplication.delete({
      where: { id: applicationId },
    });

    res.status(200).json({
      message: 'Successfully delete',
    });
  } catch (error: any) {
    console.error(error);

    if (error.code === 'P2025') {
      res.status(404).json({
        status: 'error',
        message: "Couldn't find application",
      });
      return;
    }

    res.status(500).json({
      status: 'error',
      message: "Couldn't delete application",
    });
  }
};

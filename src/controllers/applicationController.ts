import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getApplications = async (req: Request, res: Response) => {
  try {
    const applications = await prisma.jobApplication.findMany();

    // TODO: Auth needed

    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(503).json({
      status: 'error',
      message: "Couldn't fetch applications",
    });
  }
};

export const createApplication = async (req: Request, res: Response) => {
  try {
    const { company, link } = req.body;

    // TODO: Remove hardcoded userId once Auth is implemented
    const newApplication = await prisma.jobApplication.create({
      data: {
        company,
        link,
        userId: 1,
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

export const updateApplication = async (req: Request, res: Response) => {
  try {
    const { company, link } = req.body;

    // TODO: Auth needed

    const newApplication = await prisma.jobApplication.update({
      where: { id: Number(req.params.id) },
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

export const deleteApplication = async (req: Request, res: Response) => {
  try {
    // TODO: Auth needed

    await prisma.jobApplication.delete({
      where: { id: Number(req.params.id) },
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

import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getApplications = async (req: Request, res: Response) => {
  try {
    const applications = await prisma.jobApplication.findMany();

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
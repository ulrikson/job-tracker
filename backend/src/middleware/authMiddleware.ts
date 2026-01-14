import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

// Extend the Request interface to include the user payload
export interface AuthRequest extends Request {
  user?: {
    userId: number;
    email: string;
  };
}

/**
 * Authentication Middleware
 */
export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  
  // Header format: "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    // 401 Unauthorized: No token provided
    res.status(401).json({ error: 'Access denied. No token provided.' });
    return; // Ensure we stop execution
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
    
    // Attach user info to the request object so controllers can use it
    req.user = decoded;
    
    next(); // Pass control to the next handler
  } catch (error) {
    // 403 Forbidden: Invalid token
    res.status(403).json({ error: 'Invalid token.' });
  }
};

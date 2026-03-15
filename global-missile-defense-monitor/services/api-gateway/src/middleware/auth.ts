import { Request, Response, NextFunction } from 'express';

const API_KEY = process.env.API_KEY || 'your_api_key_here';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== API_KEY) {
        return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }

    next();
};
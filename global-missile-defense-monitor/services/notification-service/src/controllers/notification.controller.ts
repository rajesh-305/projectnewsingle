import { Request, Response } from 'express';
type NotificationItem = {
    id: string;
    message: string;
    recipient: string;
    createdAt: string;
};

const notifications: NotificationItem[] = [];

export const sendNotification = async (req: Request, res: Response): Promise<void> => {
    try {
        const { message, recipient } = req.body;
        if (!message || !recipient) {
            res.status(400).json({ success: false, message: 'message and recipient are required' });
            return;
        }

        const item: NotificationItem = {
            id: `${Date.now()}`,
            message,
            recipient,
            createdAt: new Date().toISOString(),
        };

        notifications.unshift(item);
        res.status(201).json({ success: true, data: item });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getNotifications = async (_req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ success: true, data: notifications });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ success: false, message: err.message });
    }
};
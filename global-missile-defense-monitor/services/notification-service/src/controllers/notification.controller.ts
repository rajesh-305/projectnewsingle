import { Request, Response } from 'express';
import { NotificationService } from '../services/notification.service';

export class NotificationController {
    private notificationService: NotificationService;

    constructor() {
        this.notificationService = new NotificationService();
    }

    public async sendNotification(req: Request, res: Response): Promise<void> {
        try {
            const { message, recipient } = req.body;
            const result = await this.notificationService.sendNotification(message, recipient);
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    public async getNotifications(req: Request, res: Response): Promise<void> {
        try {
            const notifications = await this.notificationService.getNotifications();
            res.status(200).json({ success: true, data: notifications });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}
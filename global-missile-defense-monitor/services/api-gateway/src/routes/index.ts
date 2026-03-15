import { Router, Request, Response } from 'express';
import axios from 'axios';
import { authMiddleware } from '../middleware/auth';

const router = Router();

const simulationServiceUrl = process.env.SIMULATION_SERVICE_URL || 'http://simulation-service:3002';
const intelligenceServiceUrl = process.env.INTELLIGENCE_SERVICE_URL || 'http://intelligence-service:3003';
const alertServiceUrl = process.env.ALERT_SERVICE_URL || 'http://alert-service:3004';
const notificationServiceUrl = process.env.NOTIFICATION_SERVICE_URL || 'http://notification-service:3005';

const createProxyHandler = (baseUrl: string) => async (req: Request, res: Response) => {
	try {
		const response = await axios({
			method: req.method as any,
			url: `${baseUrl}${req.url}`,
			data: req.body,
			params: req.query,
			headers: {
				'content-type': req.headers['content-type'] || 'application/json',
				authorization: req.headers.authorization,
				'x-api-key': req.headers['x-api-key'] as string,
			},
			validateStatus: () => true,
		});

		res.status(response.status).json(response.data);
	} catch (error) {
		console.error('Proxy request failed:', error);
		res.status(502).json({ message: 'Bad Gateway: service unavailable' });
	}
};

// Apply authentication middleware
router.use(authMiddleware);

// Define routes for each microservice
router.use('/simulation', createProxyHandler(simulationServiceUrl));
router.use('/intelligence', createProxyHandler(intelligenceServiceUrl));
router.use('/alerts', createProxyHandler(alertServiceUrl));
router.use('/notifications', createProxyHandler(notificationServiceUrl));

export default router;
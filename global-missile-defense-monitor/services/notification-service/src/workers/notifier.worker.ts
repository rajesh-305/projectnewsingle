import { Worker, isMainThread, parentPort } from 'worker_threads';
import { sendNotification } from '../services/notification.service';

if (isMainThread) {
    // This code will run in the main thread
    const worker = new Worker(__filename);
    worker.on('message', (message) => {
        console.log('Notification sent:', message);
    });
} else {
    // This code will run in the worker thread
    parentPort?.on('message', async (data) => {
        try {
            const result = await sendNotification(data);
            parentPort?.postMessage(result);
        } catch (error) {
            parentPort?.postMessage({ error: error.message });
        }
    });
}
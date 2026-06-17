import express, { type Application, type Request, type Response } from 'express';
import { config } from './config/config.js';
import { contextMiddleware } from './middleware/context.middleware.js';
import { responseMiddleware } from './middleware/response.middleware.js';

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(contextMiddleware);
app.use(responseMiddleware);

app.get('/health', (req, res) => {
  const dbStatus = req?.db?.connected ? 'Connected' : 'Disconnected';
  
  res.status(200).json({ 
    status: 'UP', 
    dbStatus,
    timestamp: new Date().toISOString() 
  });
});

const server = app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT} in ${config.NODE_ENV} mode.`);
});

process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection at:', reason);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully...');
    server.close(() => {
        console.log("Server closed. Exiting process.");
    })
});
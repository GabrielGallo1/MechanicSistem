import express from 'express';
import routes from './routes';
import clientRoutes from "./routes/client.routes";

const app = express();

app.use(express.json());

app.use("/clients", clientRoutes);

app.use(routes);

export default app;
import { Router } from 'express';

const routes = Router();

routes.get("/", (req, res) => {
    res.json({ message: "MechanicSystem API is running" })
});

export default routes;
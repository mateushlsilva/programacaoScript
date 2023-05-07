import { Router, Request, Response } from "express";



import committee from "./teams";


const routes = Router()



routes.use("/team", committee);



routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;

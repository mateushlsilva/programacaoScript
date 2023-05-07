import AppDataSource from "../data-source";
import { Request, Response } from 'express';

import { Teams } from "../entities/Teams";


class TeamsController {


    public async getAllTeams (req: Request, res: Response) : Promise<Response> {
        const teamsRepository = AppDataSource.getRepository(Teams)
        const all = await teamsRepository.find()
        return res.json(all.sort((a,b) => a.name.localeCompare(b.name)))
    }

    public async getTermoTeams (req: Request, res: Response) : Promise<Response> {
        const termo:any = req.params.termo
        const teamsRepository = AppDataSource.getRepository(Teams)
            .createQueryBuilder("time")
            .where("time.name like :name", { name:`%${termo}%` })
            .getMany()
        return res.json((await teamsRepository).sort((a,b) => a.name.localeCompare(b.name)))
    }

    public async postTeams (req: Request, res: Response) : Promise<Response> {
        try{
            const create = req.body
            const teamsRepository = AppDataSource.getRepository(Teams)
            const insert = new Teams();
            insert.name = create.name[0].toUpperCase() + create.name.slice(1,create.name.length).toLowerCase()
            const all = await teamsRepository.save(insert)
            return res.json(all)
        }catch(err){
            return res.json({error: "O nome já existe"})
        }
    }

    public async putTeams (req: Request, res: Response) : Promise<Response> {
        try{
            const create = req.body
            const teamsRepository = AppDataSource.getRepository(Teams)
            const find = await teamsRepository.findOneBy({id: create.id})
            find.name = create.name[0].toUpperCase() + create.name.slice(1,create.name.length).toLowerCase()
            const all = await teamsRepository.save(find)
            return res.json(all)
        }catch(err){
            return res.json({error: "O nome já existe"})
        }
    }

    public async deleteTeams (req: Request, res: Response) : Promise<Response> {
        try{
            const create = req.body
            const teamsRepository = AppDataSource.getRepository(Teams)
            const find = await teamsRepository.findOneBy({id: create.id})
            
            const all = await teamsRepository.delete(find)
            return res.json(all)
        }catch(err){
            return res.json({raw: [], affected: 0})
        }
    }

}
export default new TeamsController();
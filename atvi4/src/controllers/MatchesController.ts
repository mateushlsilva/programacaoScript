import AppDataSource from "../data-source";
import { Request, Response } from 'express';

import { Match } from "../entities/Matchs";


class MatchesController {


    public async getAllMatches (req: Request, res: Response) : Promise<Response> {
        try{
            const teamsRepository = AppDataSource.getRepository(Match)
            // .createQueryBuilder("team")
            // .orderBy("team.name", "ASC")
            // .getMany()
            const all = await teamsRepository.find()
            return res.json(all)
        }catch(err){
            return res.json({erro: "Não foi possivel pegar os teams"})
        }
    }

    // public async getTermoTeams (req: Request, res: Response) : Promise<Response> {
    //     try{
    //         const termo:any = req.params.termo
    //         const teamsRepository = AppDataSource.getRepository(Teams)
    //             .createQueryBuilder("time")
    //             .where("time.name like :name", { name:`%${termo}%` })
    //             //.orderBy("team.name", "ASC")
    //             .getMany()
    //         return res.json((await teamsRepository))
    //     }catch(err){
    //         return res.json({erro: "Não foi possivel pegar os teams"})
    //     }
    // }

    public async postMatches (req: Request, res: Response) : Promise<Response> {
        try{
            const create = req.body
            const matchesRepository = AppDataSource.getRepository(Match)
            const insert = new Match();
            insert.host = create.idhost
            insert.visitor =  create.idvisitor
            insert.date = create.date
            const all = await matchesRepository.save(insert)
            return res.json(all)
        }catch(err){
            return res.json({error: "O nome já existe"})
        }
    }

    // public async putTeams (req: Request, res: Response) : Promise<Response> {
    //     try{
    //         const create = req.body
    //         const teamsRepository = AppDataSource.getRepository(Teams)
    //         const find = await teamsRepository.findOneBy({id: create.id})
    //         find.name = create.name[0].toUpperCase() + create.name.slice(1,create.name.length).toLowerCase()
    //         const all = await teamsRepository.save(find)
    //         return res.json(all)
    //     }catch(err){
    //         return res.json({error: "O nome já existe"})
    //     }
    // }

    // public async deleteTeams (req: Request, res: Response) : Promise<Response> {
    //     try{
    //         const create = req.body
    //         const teamsRepository = AppDataSource.getRepository(Teams)
    //         const find = await teamsRepository.findOneBy({id: create.id})
            
    //         const all = await teamsRepository.delete(find)
    //         return res.json(all)
    //     }catch(err){
    //         return res.json({raw: [], affected: 0})
    //     }
    // }

}
export default new MatchesController();
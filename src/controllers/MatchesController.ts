import AppDataSource from "../data-source";
import { Request, Response } from 'express';

import { Match } from "../entities/Matchs";


class MatchesController {


    public async getAllMatches (req: Request, res: Response) : Promise<Response> {
        try{
            const {limit, offset} = req.body
            const teamsRepository = AppDataSource.getRepository(Match)
            .createQueryBuilder("match")
            .leftJoinAndSelect("match.host", "host")
            .leftJoinAndSelect("match.visitor", "visitor")
            .orderBy("match.date", "DESC")
            .limit(limit)
            .offset(offset)
            .getMany()
            
            return res.json((await teamsRepository))
        }catch(err){
            return res.json({erro: "Não foi possivel pegar os teams"})
        }
    }

    public async getUuid (req: Request, res: Response) : Promise<Response> {
        try{
            const termo:any = req.params.uuid
            const matchRepository = AppDataSource.getRepository(Match)
                .createQueryBuilder("match")
                .leftJoinAndSelect("match.host", "host")
                .leftJoinAndSelect("match.visitor", "visitor")
                .where("match.host = :host", { host:termo })
                .orWhere("match.visitor = :visitor", { visitor:termo })
                .orderBy("match.date", "DESC")
                .getMany()
            return res.json((await matchRepository))
        }catch(err){
            return res.json({erro: "Não foi possivel pegar os teams"})
        }
    }

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
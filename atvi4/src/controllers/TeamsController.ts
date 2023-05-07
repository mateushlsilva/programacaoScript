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

    // public async postCommittee (req: Request, res: Response) : Promise<Response> {
    //     const createCommittee = req.body
    //     const committeeRepository = AppDataSource.getRepository(Committee)
    //     const insertCommittee = new Committee();
    //     insertCommittee.comiImpactCto = createCommittee.comiImpactCto
    //     insertCommittee.comiImpactHp = createCommittee.comiImpactHp
    //     insertCommittee.comiCostSquad = createCommittee.comiCostSquad
    //     insertCommittee.comiRiskRt = createCommittee.comiRiskRt
    //     insertCommittee.comiRiskCso = createCommittee.comiRiskCso
  
    

    //     const allCommittee = await committeeRepository.save(insertCommittee)
    //     return res.json(allCommittee)
    // }

    // public async putCommittee (req: Request, res: Response) : Promise<Response> {
    //     const createCommittee = req.body
    //     const idCommittee:any = req.params.uuid
    //     const committeeRepository = AppDataSource.getRepository(Committee)
    //     const findCommittee = await committeeRepository.findOneBy({id: idCommittee})
    //     findCommittee.comiImpactCto = createCommittee.comiImpactCto
    //     findCommittee.comiImpactHp = createCommittee.comiImpactHp
    //     findCommittee.comiCostSquad = createCommittee.comiCostSquad
    //     findCommittee.comiRiskRt = createCommittee.comiRiskRt
    //     findCommittee.comiRiskCso = createCommittee.comiRiskCso

    
    //     const allCommittee = await committeeRepository.save(findCommittee)
    //     return res.json(allCommittee)
    // }

}
export default new TeamsController();
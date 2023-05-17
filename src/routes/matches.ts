import { Router } from "express";

import { MatchesController } from "../controllers";
const routes = Router();

// routes.get('/especifico/:uuid', CommitteeControllers.getCommittee);

// routes.post('/createCommittee', CommitteeControllers.postCommittee);

// routes.put('/modify/:uuid', CommitteeControllers.putCommittee);

routes.get("/", MatchesController.getAllMatches)
routes.get("/:uuid",MatchesController.getUuid)
routes.post("/", MatchesController.postMatches)
routes.put("/", MatchesController.putMatch)
// routes.delete("/", TeamsController.deleteTeams)

export default routes;
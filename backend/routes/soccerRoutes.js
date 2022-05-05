import { 
        addNewPlayer, 
        getPlayerWithID, 
        getPlayers,
        updatePlayer,
        deletePlayer
        } from "../controllers/playerControllers";

const routes = (app) => {
    app.route("/players")
        .get(getPlayers)
        .get(getPlayerWithID)
        .post(addNewPlayer);

    app.route("/player/:PlayerId")
        .get(getPlayerWithID)
        .put(updatePlayer)
        .delete(deletePlayer);

}

export default routes;
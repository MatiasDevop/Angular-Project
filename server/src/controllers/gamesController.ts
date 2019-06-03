import { Request, Response } from 'express';
//conection
import db from '../database';

class GamesController{

    public async list(req:Request, res:Response){
        const games = await db.query('SELECT * FROM games');
        res.json(games);
        //res.send('Gamesss')
    }
    public async getOne(req:Request, res:Response):Promise<any>{
          const { id } = req.params;// that part knows as a destructure in JS
          const games = await db.query('SELECT * FROM games WHERE id = ?', [id]);
            if(games.length > 0){
                return res.json(games[0]);
            }
            res.status(404).json({text:"the game doesn't exits"});
          //res.json({text : 'Game Founded'});
        //res.json({text: 'this is game' +req.params.id });
    }
    public async create(req:Request, res:Response):Promise<void>{
        await db.query('INSERT INTO games set?', [req.body]);
        //console.log(req.body);
        res.json({message:'Game saved'});
    }
    public async update(req:Request, res:Response):Promise<void>{
        const { id } = req.params;
       await db.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({text:'THe game was updated..'});
    }
    public async delete(req:Request, res:Response):Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({text:'THe game was deleted'});
    }
    
}
const gamesController = new GamesController();
export default gamesController;
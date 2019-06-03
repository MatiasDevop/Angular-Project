"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'APIS is /api/games' });
        //res.send('Hello');
    }
}
exports.indexController = new IndexController();

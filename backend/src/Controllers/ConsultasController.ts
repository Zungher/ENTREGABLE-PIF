import { Request, Response } from "express";
import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'ejemplo',
    port: 3306
}

class ConsultasController {
    public index(req: Request, res: Response) {
        res.json({ "Controlador": 'Funciona la API' });   
    }

    public holamundo(req: Request, res: Response) {
        res.json({ "Controlador": 'Hola Mundo' });   
    }

    public async getuser(req: Request, res: Response) {
        try {
            const conexion = await mysql.createConnection(config);

            const consulta = `select * from usuarios;`;

            const result = await conexion.query(consulta);
            const respuesta = result[0];

            await conexion.end()
            return res.status(200).json({ respuesta })
            
        } catch (error) {
            return res.status(500).json({ "error": 'ya no sale' });
        }  
    }
}

export const consultasController = new ConsultasController();
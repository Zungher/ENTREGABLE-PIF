import { Request, Response } from "express";
import mysql from 'mysql2/promise';

/* const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejemplo_api',
    port: 3306
} */

class ConsultasController {
    public index(req: Request, res: Response) {
        res.json({ "Controlador": 'Funciona la API' });   
    }
}
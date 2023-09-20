import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import body_parser from 'body-parser';
import indexRoutes from './Routes/Rutas';

class servidor {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PUERTO || 4000);
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ limit: '50mb' }));
        this.app.use(cors());
        this.app.use(body_parser.urlencoded({ extended: true }));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server en Puerto', this.app.get('port'))
        });
    }
}


export const server = new servidor();
server.start();
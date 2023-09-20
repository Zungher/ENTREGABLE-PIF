import { Router } from "express";
import { consultasController } from "../Controllers/ConsultasController";

class IndexRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', consultasController.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
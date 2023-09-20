"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultasController_1 = require("../Controllers/ConsultasController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ConsultasController_1.consultasController.index);
        this.router.get('/mundohola', ConsultasController_1.consultasController.holamundo);
        this.router.get('/ejemplo', ConsultasController_1.consultasController.getuser);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;

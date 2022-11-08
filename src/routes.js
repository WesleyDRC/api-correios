import { Router } from "express";

import Cep from './controllers/cep.js'
import CalcularPrazo from "./controllers/calcularFrete.js";

const routes = Router()

routes.post('/cep', Cep.encontrarEndereco )
routes.post('/calcularFrete', CalcularPrazo.calcular )

export default routes;
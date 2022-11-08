import { Router } from "express";

import Cep from './controllers/cep'
import CalcularPrazo from "./controllers/calcularFrete";

const routes = Router()

routes.post('/cep', Cep.encontrarEndereco )
routes.post('/calcularFrete', CalcularPrazo.calcular )

export default routes;
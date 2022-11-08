import { calcularPrecoPrazo } from "correios-brasil";

class CalcularPrazo {
    async calcular(request, response) {
        try {
            const { 
                sCepOrigem,
                sCepDestino,
                nVlPeso,
                nCdFormato,
                nVlComprimento,
                nVlAltura,
                nVlLargura,
                nCdServico,
                nVlDiametro
            } = request.body

            const res = await calcularPrecoPrazo({
                sCepOrigem,
                sCepDestino,
                nVlPeso,
                nCdFormato,
                nVlComprimento,
                nVlAltura,
                nVlLargura,
                nCdServico,
                nVlDiametro
            })
            return response.json(res)
            
        } catch ( error ) {
            consolog.log(error);
        }
    }
}

export default new CalcularPrazo()

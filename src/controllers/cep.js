import cep from 'cep-promise'

class Cep {
    async encontrarEndereco(request, response) {
        
        try {
            const { valueCep } = request.body

            cep(valueCep)
                .then( result => response.json(result))
                .catch((error) => {
                    return response.json({ error: error.message});
                }) 
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: " Internal server error. " });
        }
        
       
    }
}

export default new Cep();
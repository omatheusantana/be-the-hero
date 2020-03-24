const connection = require('../database/connection');

const TABLE = "incidents";

module.exports = {

    async index(request, response){
        const ong_id = request.headers.authorization;
        const incidents = await connection(TABLE)
                                    .where('ong_id', ong_id)
                                    .select('*');

        return response.json(incidents);
    }
};
const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

const ONGS_ROUTE = '/ongs';
const INCIDENTS_ROUTE = '/incidents';
const PROFILE_ROUTE = '/profile';
const SESSIONS_ROUTE = '/sessions';


routes.get(ONGS_ROUTE, OngController.index); 

routes.post(ONGS_ROUTE, celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.get(INCIDENTS_ROUTE, celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index); 

routes.post(INCIDENTS_ROUTE, celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required()
    }),
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}
), IncidentController.create);

routes.delete(`${INCIDENTS_ROUTE}/:id`, IncidentController.delete);

routes.get(PROFILE_ROUTE, celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index); 

routes.post(SESSIONS_ROUTE, SessionController.create); 

module.exports = routes;

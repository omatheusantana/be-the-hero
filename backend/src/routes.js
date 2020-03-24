const express = require('express');


const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

const ONGS_ROUTE = '/ongs';
routes.get(ONGS_ROUTE, OngController.index); 
routes.post(ONGS_ROUTE, OngController.create);

const INCIDENTS_ROUTE = '/incidents';
routes.get(INCIDENTS_ROUTE, IncidentController.index); 
routes.post(INCIDENTS_ROUTE, IncidentController.create);
routes.delete(`${INCIDENTS_ROUTE}/:id`, IncidentController.delete);

const PROFILE_ROUTE = '/profile';
routes.get(PROFILE_ROUTE, ProfileController.index); 

const SESSIONS_ROUTE = '/sessions';
routes.post(SESSIONS_ROUTE, SessionController.create); 

module.exports = routes;

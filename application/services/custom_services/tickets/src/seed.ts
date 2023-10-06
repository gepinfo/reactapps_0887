import * as mongoose from 'mongoose';
import { ticketsSchema } from './models/daomodels/tickets';

const ticketsModel = mongoose.model('tickets', ticketsSchema);

export class Seed {

    constructor() {

    }

    

}

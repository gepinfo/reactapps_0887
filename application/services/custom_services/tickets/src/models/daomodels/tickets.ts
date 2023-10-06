
import * as mongoose from 'mongoose';
import { Ticketstatus } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const ticketsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   assigness: { type: String },
   severity: { type: Schema.Types.String, ref: 'severity' },
   types: { type: Schema.Types.String, ref: 'types' },
   ticketstatus: { type: String, enum: Ticketstatus },
   description: { type: String }
})

const ticketsModel = mongoose.model('tickets', ticketsSchema, 'tickets');
export default ticketsModel;

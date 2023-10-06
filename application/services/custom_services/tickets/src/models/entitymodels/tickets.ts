
export interface tickets 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: { type: String },
   assigness: { type: String },
   severity: { type: String, ref: 'severity' },
   types: { type: String, ref: 'types' },
   ticketstatus: { type: Ticketstatus },
   description: { type: String }
}


export enum Ticketstatus {
   OPEN = 'open',
   CLOSE = 'close',
   INPROGRESS = 'inprogress'
}




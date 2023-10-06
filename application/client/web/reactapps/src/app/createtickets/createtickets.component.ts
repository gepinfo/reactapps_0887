import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateticketsService } from './createtickets.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



    export enum ticketstatus {
        OPEN = 'open',
        CLOSE = 'close',
        INPROGRESS = 'inprogress',
    }


@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.scss'],
})

export class CreateticketsComponent implements OnInit {
    queryId: any;
    Editor: any = ClassicEditor;
    severityitemArray: any = [];
    typesitemArray: any = [];
    public tickets:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        assigness: '',
        severity: '',
        types: '',
        ticketstatus: '',
        description: '',
    }




    constructor (
        private createticketsService: CreateticketsService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpDelete() {
        this.createticketsService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetEntityById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.createticketsService.GpUpdate(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.assigness = ''
 	 	this.tickets.severity = ''
 	 	this.tickets.types = ''
 	 	this.tickets.ticketstatus = ''
 	 	this.tickets.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketsService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    typesGpGetAllValues() {
        this.createticketsService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketsService.GpCreate(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.assigness = ''
 	 	this.tickets.severity = ''
 	 	this.tickets.types = ''
 	 	this.tickets.ticketstatus = ''
 	 	this.tickets.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}
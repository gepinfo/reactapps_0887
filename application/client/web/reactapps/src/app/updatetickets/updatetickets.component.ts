import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateticketsService } from './updatetickets.service';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



    export enum ticketstatus {
        OPEN = 'open',
        CLOSE = 'close',
        INPROGRESS = 'inprogress',
    }


@Component({
  selector: 'app-updatetickets',
  templateUrl: './updatetickets.component.html',
  styleUrls: ['./updatetickets.component.scss'],
})

export class UpdateticketsComponent implements OnInit {
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
        private updateticketsService: UpdateticketsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
 this.queryId = params['id'];
            });


        this.GpGetEntityById();
    
    }
    severityGpGetAllValues() {
        this.updateticketsService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    typesGpGetAllValues() {
        this.updateticketsService.typesGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.typesitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updateticketsService.GpUpdate(this.tickets).subscribe((data:any) => {
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
    GpDelete() {
        this.updateticketsService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetEntityById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetEntityById() {
        this.updateticketsService.GpGetEntityById(this.queryId).subscribe((data:any) => {
            this.tickets = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}
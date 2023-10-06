import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateseverityService } from './createseverity.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';





@Component({
  selector: 'app-createseverity',
  templateUrl: './createseverity.component.html',
  styleUrls: ['./createseverity.component.scss'],
})

export class CreateseverityComponent implements OnInit {
    Editor: any = ClassicEditor;
    public severity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }




    constructor (
        private createseverityService: CreateseverityService,
    ) { }

    ngOnInit() {
        this.severity.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.createseverityService.GpCreate(this.severity).subscribe((data:any) => {
            this.severity.name = ''
 	 	this.severity.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}
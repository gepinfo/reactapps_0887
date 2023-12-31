import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatetypesComponent } from './createtypes.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        CKEditorModule,
        RouterModule.forChild([
            { path: '', component: CreatetypesComponent },
        ])
    ],
    declarations: [
        CreatetypesComponent,
    ]
})
export class CreatetypesModule { }
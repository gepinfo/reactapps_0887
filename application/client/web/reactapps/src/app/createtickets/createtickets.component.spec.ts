import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateticketsComponent } from './createtickets.component';
import { CreateticketsService } from './createtickets.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateticketsComponent } from './createtickets.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


describe('CreateticketsComponent', () => {
  let component: CreateticketsComponent;
  let fixture: ComponentFixture<CreateticketsComponent>;
  let service: CreateticketsService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;
  let deleteSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
        CKEditorModule,
      ],
      declarations: [ CreateticketsComponent ],
      providers: [ CreateticketsService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateticketsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CreateticketsService);
    httpClient = TestBed.inject(HttpClient);
    deleteSpy = spyOn(service, 'GpDelete');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.tickets.created_by).toEqual(mockEmail);

  });
  





  // delete
  it('should call GpDelete with queryId and call Component on successful delete', () => {
    const queryId = '12ihiuh9ew8ru93u23';
    deleteSpy.and.returnValue(of({}));

    component.queryId = queryId;
    component.GpDelete();

    expect(deleteSpy).toHaveBeenCalledWith(queryId);
  });

  it('should log error on delete failure', () => {
    const error = new Error('Delete failed');
    deleteSpy.and.returnValue(throwError(error));
    spyOn(console, 'log');

    component.GpDelete();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });







   //update test case files
  it('should clear Component tickets properties on successful update', () => {
    spyOn(service, 'GpUpdate').and.returnValue(of({}));

    component.GpUpdate();

    // Expect the tickets properties to be reset
    expect(component.tickets.name).toBe('');
    expect(component.tickets.assigness).toBe('');
    expect(component.tickets.severity).toBe('');
    expect(component.tickets.types).toBe('');
    expect(component.tickets.ticketstatus).toBe('');
    expect(component.tickets.description).toBe('');
  });

  it('should log error on GpUpdate failure', () => {
    const error = new Error('GpUpdate failed');
    spyOn(service, 'GpUpdate').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GpUpdate();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });





















  // GpCreate test case file
  it('should call GpCreate and reset  properties', () => {

    // Create a spy for the GpCreate method of the service
    spyOn(service, 'GpCreate').and.returnValue(of({}));
    
    // Set values for tickets properties
    component.tickets.name = 'Test name';
    component.tickets.assigness = 'Test assigness';
    component.tickets.severity = 'Test severity';
    component.tickets.types = 'Test types';
    component.tickets.ticketstatus = 'Test ticketstatus';
    component.tickets.description = 'Test description';


    // Call the GpCreate method
    component.GpCreate();


    // Expect the GpCreate method to have been called with the tickets object
    expect(service.GpCreate).toHaveBeenCalledWith(component.tickets);

    // Expect the tickets properties to be reset
    expect(component.tickets.name).toBe('');
    expect(component.tickets.assigness).toBe('');
    expect(component.tickets.severity).toBe('');
    expect(component.tickets.types).toBe('');
    expect(component.tickets.ticketstatus).toBe('');
    expect(component.tickets.description).toBe('');
  });
  it('should log error on update GpCreate failure', () => {
    const error = new Error('GpCreate failed');
    spyOn(service, 'GpCreate').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GpCreate();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });









});
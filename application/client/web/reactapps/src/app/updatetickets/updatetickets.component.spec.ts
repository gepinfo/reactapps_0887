import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateticketsComponent } from './updatetickets.component';
import { UpdateticketsService } from './updatetickets.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateticketsComponent } from './updatetickets.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


describe('UpdateticketsComponent', () => {
  let component: UpdateticketsComponent;
  let fixture: ComponentFixture<UpdateticketsComponent>;
  let service: UpdateticketsService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;
  let activatedRoute: ActivatedRoute;
  let deleteSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
        CKEditorModule,
      ],
      declarations: [ UpdateticketsComponent ],
      providers: [ UpdateticketsService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateticketsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UpdateticketsService);
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
    spyOn(component, 'GpGetEntityById');
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.tickets.created_by).toEqual(mockEmail);

    expect(component.GpGetEntityById).toHaveBeenCalled();
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









  // delete
  it('should call GpDelete with queryId and call Component on successful delete', () => {
    const queryId = '12ihiuh9ew8ru93u23';
    spyOn(component, 'GpGetEntityById');
    deleteSpy.and.returnValue(of({}));

    component.queryId = queryId;
    component.GpDelete();

    expect(deleteSpy).toHaveBeenCalledWith(queryId);
    expect(component.GpGetEntityById).toHaveBeenCalled();
  });

  it('should log error on delete failure', () => {
    const error = new Error('Delete failed');
    deleteSpy.and.returnValue(throwError(error));
    spyOn(console, 'log');

    component.GpDelete();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });






  // get noun by id
  it('should update tickets when tickets Component service returns data', () => {
    const mockData = { 
      _id: '323', 
      name: 'name 1',
      assigness: 'assigness 1',
      severity: 'severity 1',
      types: 'types 1',
      ticketstatus: 'ticketstatus 1',
      description: 'description 1',
    };
    spyOn(service, 'GpGetEntityById').and.returnValue(of(mockData));

    component.GpGetEntityById();

    expect(service.GpGetEntityById).toHaveBeenCalledWith(component.queryId);
    expect(component.tickets).toEqual(mockData);
  });

  it('should log error when service throws an error', () => {
    const mockError = new Error('Mock error');
    spyOn(service, 'GpGetEntityById').and.returnValue(throwError(() => {
      return mockError;
    }));
    spyOn(console, 'log');

    component.GpGetEntityById();

    expect(service.GpGetEntityById).toHaveBeenCalledWith(component.queryId);
    expect(console.log).toHaveBeenCalledWith('Error', mockError);
  });







});
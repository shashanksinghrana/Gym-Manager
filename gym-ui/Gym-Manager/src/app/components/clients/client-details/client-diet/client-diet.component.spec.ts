import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDietComponent } from './client-diet.component';

describe('ClientDietComponent', () => {
  let component: ClientDietComponent;
  let fixture: ComponentFixture<ClientDietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

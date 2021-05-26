import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHackathonComponent } from './listar-hackathon.component';

describe('ListarHackathonComponent', () => {
  let component: ListarHackathonComponent;
  let fixture: ComponentFixture<ListarHackathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHackathonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

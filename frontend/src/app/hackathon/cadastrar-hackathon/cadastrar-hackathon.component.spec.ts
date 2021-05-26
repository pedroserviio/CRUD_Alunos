import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarHackathonComponent } from './cadastrar-hackathon.component';

describe('CadastrarHackathonComponent', () => {
  let component: CadastrarHackathonComponent;
  let fixture: ComponentFixture<CadastrarHackathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarHackathonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

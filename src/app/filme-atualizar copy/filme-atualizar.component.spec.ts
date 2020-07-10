import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeAtualizarComponent } from './filme-atualizar.component';

describe('FilmeAtualizarComponent', () => {
  let component: FilmeAtualizarComponent;
  let fixture: ComponentFixture<FilmeAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

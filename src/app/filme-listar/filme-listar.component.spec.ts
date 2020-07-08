import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeListarComponent } from './filme-listar.component';

describe('FilmeListarComponent', () => {
  let component: FilmeListarComponent;
  let fixture: ComponentFixture<FilmeListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

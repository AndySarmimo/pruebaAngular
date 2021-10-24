import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPedidosGComponent } from './listado-pedidos-g.component';

describe('ListadoPedidosGComponent', () => {
  let component: ListadoPedidosGComponent;
  let fixture: ComponentFixture<ListadoPedidosGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPedidosGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPedidosGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

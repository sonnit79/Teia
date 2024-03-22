import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoDialogComponent } from './carrinho-dialog.component';

describe('CarrinhoDialogComponent', () => {
  let component: CarrinhoDialogComponent;
  let fixture: ComponentFixture<CarrinhoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrinhoDialogComponent]
    });
    fixture = TestBed.createComponent(CarrinhoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

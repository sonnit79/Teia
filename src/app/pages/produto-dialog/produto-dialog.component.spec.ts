import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDialogComponent } from './produto-dialog.component';

describe('ProdutoDialogComponent', () => {
  let component: ProdutoDialogComponent;
  let fixture: ComponentFixture<ProdutoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoDialogComponent]
    });
    fixture = TestBed.createComponent(ProdutoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

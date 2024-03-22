import { Component, computed, inject } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { CarrinhoDialogComponent } from '../carrinho-dialog/carrinho-dialog.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {

  private produtoService = inject(ProdutoService);
  private storage = inject(LocalStorageService);
  public dialog = inject(MatDialog)

  public qtdItens = computed(() => this.produtoService.qtdItensCarrinho());

  ngOnInit(){
    // Faz a contagem dos itens no local storage
    this.storage.conta();   
  }

  // Abre o dialog para visualizar itens no carrinho
  acessarCarrinho() {
    const dialogRef = this.dialog.open(CarrinhoDialogComponent);
  }
}

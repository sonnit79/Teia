import { Component, OnInit, inject } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-carrinho-dialog',
  templateUrl: './carrinho-dialog.component.html',
  styleUrls: ['./carrinho-dialog.component.scss']
})
export class CarrinhoDialogComponent implements OnInit{

  private storage = inject(LocalStorageService);

  lista: any[] = [];

  ngOnInit(){
   this.relacionaItens();
  }

  // Busca os itens do local storage
  relacionaItens(){
    this.lista = this.storage.lista();
  }

  // Remove um item do carrinho e busca os itens que ficaram
  excluiItem(item: number){
    if (this.storage.remove("item"+item)){
      this.relacionaItens();
    };
  }

  // Limpa o carrinho
  limpaCarrinho(){
    this.storage.limpa();
    this.relacionaItens();
  }
}
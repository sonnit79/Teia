import { Injectable, signal } from '@angular/core';
import { ProdutoService } from './produto.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;
  relacao: any = [];

  constructor(
    private produtoService: ProdutoService
  ) { 
    this.storage = window.localStorage;
  }

  // Insere itens no local storage
  insere(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  // Busca item do local storage
  busca(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key) || '{}');
    }
    return null;
  }

  // Retira itens do local storage
  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      this.conta();
      return true;
    }
    return false;
  }

  // Limpa o local storage
  limpa(): boolean {
    if (this.storage) {
      this.storage.clear();
      this.conta();
      return true;
    }
    return false;
  }

// Conta a quantidade de itens no local storage e informa ao serviço o valor atualizado
  conta(){
    let quantItens = localStorage.length;
    this.produtoService.atualizaQuantCarrinho(quantItens);
  }

  // Busca a lista de itens armazenado no local storage
  lista(): any{
   this.relacao = [];

    for (var i = 0; i < localStorage.length; i++) {
      let chave = localStorage.key(i);
      let valor = localStorage.getItem(chave || '');
      this.relacao.push(JSON.parse(valor?.toString() || ''));
    }
    return  this.relacao;
  }
}

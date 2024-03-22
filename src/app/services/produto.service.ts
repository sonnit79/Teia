import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = 'https://jsonplaceholder.typicode.com/photos/'; 

  qtdItensCarrinho = signal(0);

  constructor(private httpClient: HttpClient) { }
  
  // Busca todos os produtos
  public buscaProdutos(): Observable<Array<Produto>> {
    return this.httpClient.get<Array<Produto>>(this.url)
      .pipe(
        res => res,
        error => error
      )
  }

  // Busca apenas um produto pelo id
  public buscaProduto(id: number): Observable<Array<Produto>> {
    return this.httpClient.get<Array<Produto>>(this.url + id)
      .pipe(
        res => res,
        error => error
      )
  }

  // Incrementa a quantidade de itens no carrinho na variável signal
  public incrementaCarrinho(){
    this.qtdItensCarrinho.set(this.qtdItensCarrinho() + 1)
  }

  // Atualiza o valor do signal de acordo com a quantidade de itens no local storage
  public atualizaQuantCarrinho(quant: number){
    this.qtdItensCarrinho.set(quant);
  }
}
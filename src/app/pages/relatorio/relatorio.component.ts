
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/models/produto';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProdutoDialogComponent } from '../produto-dialog/produto-dialog.component';

export interface DialogData {
  idProduto: 0;
}

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  subscription: Subscription;
  colunasMostradas: string[] = [];
  dataSource: MatTableDataSource<any>;

  public dados: Produto[] | undefined;
  public carrinho: any;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private storage: LocalStorageService,
    private produtoService: ProdutoService
    )
    {
      this.subscription = produtoService.buscaProdutos().subscribe((produto: Produto[]) => {
        this.dados = produto;
        this.montaTabela(this.dados);
      });

      this.dataSource = new MatTableDataSource();
    }

  ngOnInit(){
    // conta os itens do carrinho armazenados no local storage
    this.storage.conta(); 
  }

  public montaTabela(dados: any){
    this.colunasMostradas = ['albumId','id','title','url','thumbnailUrl','adicionar'];
    this.dataSource = new MatTableDataSource(dados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Adiciona itens no carrinho e incrementa a quantidade
  public adicionar(id: string, titulo: string, url: string){
    this.produtoService.incrementaCarrinho();
    let quant = this.produtoService.qtdItensCarrinho();

    let objeto = {
      "item": quant,
      "id": id,
      "titulo": titulo,
      "url": url
    }

    this.storage.insere("item"+quant,objeto);
  }

  // acessa o carrinho de produtos
  public acessarProduto(id: string){
    const dialogRef = this.dialog.open(ProdutoDialogComponent,{data: {
      idProduto: id,
    },});
  }
}
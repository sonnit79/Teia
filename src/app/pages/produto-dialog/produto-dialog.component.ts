import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../relatorio/relatorio.component';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-dialog',
  templateUrl: './produto-dialog.component.html',
  styleUrls: ['./produto-dialog.component.scss']
})
export class ProdutoDialogComponent implements OnInit {
  constructor(
    private produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    public dadosProduto: any = '';
    private idPesquisa = this.data.idProduto;

    ngOnInit(){
        this.buscaProduto(this.idPesquisa);
    }

    // Busca o produto a ser mostrado no dialog
    private buscaProduto(id: number){
      this.produtoService.buscaProduto(id).subscribe((produto: any) => {
        this.dadosProduto = produto;
      }
    )};
}

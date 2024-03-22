import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { DialogData } from '../relatorio/relatorio.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent {

  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  )
  {}

  urlJson = "assets/comentarios.json";
  comentarios: any = '';
  idPesquisa = this.data.idProduto;
 
  ngOnInit(){
    this.buscaComentarios(this.idPesquisa);
  }

  // Busca todos os comentarios
  private buscaTodosComentarios(id: string){
      this.http.get<any>(this.urlJson).subscribe(resposta => {
        this.comentarios = resposta.comentarios;
      });
  }

  // Busca os comentarios existentes para o produto filtrando o json pelo id
  private buscaComentarios(id: number){
    this.http.get<any>(this.urlJson).subscribe((resposta: any) => {
      let filtro = resposta.comentarios.filter((data: { id: number; }) => data.id == id);
      this.comentarios = filtro;
    });
  }
}

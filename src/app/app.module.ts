import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule }  from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ComentarioComponent } from './pages/comentario/comentario.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { CabecalhoComponent } from './pages/cabecalho/cabecalho.component';
import { CarrinhoDialogComponent } from './pages/carrinho-dialog/carrinho-dialog.component';
import { ProdutoDialogComponent } from './pages/produto-dialog/produto-dialog.component';

import { PaginatorIntl_BR } from './translate/paginator_BR';
import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    RelatorioComponent,
    CarrinhoComponent,
    CabecalhoComponent,
    CarrinhoDialogComponent,
    ComentarioComponent,
    ProdutoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'pt-br'},
    { provide: MatPaginatorIntl, useValue: PaginatorIntl_BR() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
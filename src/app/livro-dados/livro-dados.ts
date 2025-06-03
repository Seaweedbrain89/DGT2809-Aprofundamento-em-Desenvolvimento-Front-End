import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora';
import { ControleLivrosService } from '../controle-livros';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.html',
  styleUrl: './livro-dados.css',
   imports: [
    CommonModule,
    FormsModule,
  ]
})
export class LivroDadosComponent implements OnInit {

  public livro: Livro;
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

    constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService,
    router: Router
  ) {
    this.livro = new Livro(0, 0, '', '', []);
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');

    this.servLivros.incluir(this.livro);

    this.router.navigateByUrl('/lista');
  }

}



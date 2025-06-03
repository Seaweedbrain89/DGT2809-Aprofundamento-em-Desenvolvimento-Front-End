import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: "Clean Code",
      resumo: "Um guia de boas práticas para desenvolvimento de software limpo e sustentável.",
      autores: ["Robert C. Martin"]
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: "O Programador Pragmático",
      resumo: "Conselhos práticos para se tornar um programador mais eficiente.",
      autores: ["Andrew Hunt", "David Thomas"]
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: "JavaScript: O Guia Definitivo",
      resumo: "Tudo o que você precisa saber sobre JavaScript moderno.",
      autores: ["David Flanagan"]
    }
  ];

  constructor() {}

  obterLivros(): Array<Livro> {
    return this.livros;
  }

incluir(livro: Livro): void {
  const codigos = this.livros
    .map(l => l.codigo)
    .filter((codigo): codigo is number => codigo !== undefined);

  const novoCodigo = codigos.length > 0 ? Math.max(...codigos) + 1 : 1;

  livro.codigo = novoCodigo;
  this.livros.push(livro);
}

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index > -1) {
      this.livros.splice(index, 1);
    }
  }
}

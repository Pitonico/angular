import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  livro: any = {
    titulo: "Learning Angular",
    rating: 4.85,
    numeroPaginas: 415,
    preco: 80.00,
    dataLancamento: new Date(2023, 3, 5),
    url: "http://google.com"
  }
}

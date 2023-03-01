import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  // styleUrls: ['./event-binding.component.css']
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class EventBindingComponent {

  public isMouseOver: boolean = false;

  public valorAtual: string = '';
  public valorSalvo: string = '';

  public onClick(): void {
    alert("Clicaram aqui")
  }

  public onKeyUp(event: KeyboardEvent): void{
    this.valorAtual = (<HTMLInputElement>event.target).value
  }

  public salvarValor(value: string): void {
    this.valorSalvo = value;
  }

  public onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }
}

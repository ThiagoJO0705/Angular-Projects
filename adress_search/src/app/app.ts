import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Forms } from './components/forms/forms';

@Component({
  imports: [RouterOutlet, Forms],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('adress_search');
}

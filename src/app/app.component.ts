import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'matrimony-app';
  @ViewChild('myTopnav', {read: ElementRef}) myTopnav!: ElementRef;

  myFunction() {
    const x: HTMLElement | null = this.myTopnav.nativeElement;
    if (x!.className === 'topnav') {
      x!.className += ' responsive';
    } else {
      x!.className = 'topnav';
    }
  }
}

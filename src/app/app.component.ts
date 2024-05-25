import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UtilityService } from './utils/utility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'matrimony-app';
  @ViewChild('myTopnav', {read: ElementRef}) myTopnav!: ElementRef;

  constructor(public utilService: UtilityService) {
  }

  myFunction() {
    const x: HTMLElement | null = this.myTopnav.nativeElement;
    if (x!.className === 'topnav') {
      x!.className += ' responsive';
    } else {
      x!.className = 'topnav';
    }
  }
}

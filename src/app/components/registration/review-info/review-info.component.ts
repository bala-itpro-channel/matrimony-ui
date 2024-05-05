import { Component } from '@angular/core';
import { BasicInfoComponent } from '../basic-info/basic-info.component';

@Component({
  selector: 'app-review-info',
  standalone: true,
  imports: [BasicInfoComponent],
  templateUrl: './review-info.component.html',
  styleUrl: './review-info.component.scss'
})
export class ReviewInfoComponent {

}

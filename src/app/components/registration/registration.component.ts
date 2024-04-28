import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [StepperModule, ButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })    
  }
}

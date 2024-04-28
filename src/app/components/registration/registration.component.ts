import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileType } from '../../models/registration.model';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    StepperModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  myFormBasicInfo!: FormGroup;
  myFormMoreInfo!: FormGroup;
  profileTypes: ProfileType[] = [
    { name: 'My self', code: 'My self' },
    { name: 'Son', code: 'Son' },
    { name: 'Daughter', code: 'Daughter' },
    { name: 'Sister', code: 'Sister' },
    { name: 'Brother', code: 'Brother' },
    { name: 'Cousin', code: 'Cousin' },
    { name: 'Relative', code: 'Relative' },
    { name: 'Friend', code: 'Friend' },
  ];

  ngOnInit(): void {
    this.myFormBasicInfo = new FormGroup({
      profileId: new FormControl(0),
      onBehalfOf: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      marritalStatus: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      fatherName: new FormControl('', Validators.required),
      motherName: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      income: new FormControl(0, Validators.required),
      education: new FormControl('', Validators.required),
    });

    this.myFormMoreInfo = new FormGroup({
      houseName: new FormControl('', Validators.required),
      branch: new FormControl('', Validators.required),
      temple: new FormControl('', Validators.required),
      femaleGod: new FormControl('', Validators.required),
      dosham: new FormControl('', Validators.required),
      star: new FormControl('', Validators.required),
      zodiac: new FormControl('', Validators.required),
      nativePlace: new FormControl('', Validators.required),
      currentPlace: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required),
    });
  }
}

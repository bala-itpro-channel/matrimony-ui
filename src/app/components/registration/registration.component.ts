import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileType, UserInfo } from '../../models/registration.model';
import { DropdownModule } from 'primeng/dropdown';
import { ReviewInfoComponent } from "./review-info/review-info.component";
import { BasicInfoComponent } from "./basic-info/basic-info.component";
import { MoreInfoComponent } from './more-info/more-info.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    StepperModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    ReviewInfoComponent,
    BasicInfoComponent,
    MoreInfoComponent,
  ],
})
export class RegistrationComponent implements OnInit {
  userInfo: UserInfo = {
    id: 0,
    name: 'bala.in@gmail.com',
    email: 'bala.in@gmail.com',
    password: 'bala1976',
    firstName: 'Bala',
    roles: 'ROLE_USER',
    onBehalfOf: 'Brother',
    education: 'BE',
    gender: 'M',
    fatherName: 'Ganesan',
    motherName: 'Ramu',
    dob: '12/12/1976',
    job: 'Software',
    income: 120000,
    houseName: 'Seevilan',
    branch: 'Vala',
    temple: 'Mangudi',
    femaleGod: 'No',
    star: 'My star',
    zodiac: 'Leo',
    nativePlace: 'Tallampatti',
    currentPlace: 'Chennai',
    dosham: 'No',
    marritalStatus: 'Single',
    height: '168cm',
    details: 'Hello my name is Bala. <b>I am good man </b>',
    mobile: '+1-647-960-1976',
  };

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

  userInfoForm!: FormGroup;
  fb: FormBuilder = new FormBuilder();
  basicInfo!: FormGroup;
  ngOnInit(): void {
    this.userInfoForm = new FormGroup ({
      title: new FormControl(''),
    });
  }
}

import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('nextBtn') nextBtn!: ElementRef;
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
    height: '168',
    details: 'Hello my name is Bala. <b>I am good man </b>',
    mobile: '+1-647-960-1976',
  };

  userInfoForm!: FormGroup;
  fb: FormBuilder = new FormBuilder();
  basicInfo!: FormGroup;
  ngOnInit(): void {
    this.userInfoForm = new FormGroup({
      title: new FormControl(''),
    });
  }

  onLastElementBlur(name: string) {
    console.log(name);
    (this.nextBtn.nativeElement as HTMLElement).scrollIntoView({
      behavior: 'smooth'
    });
  }
}

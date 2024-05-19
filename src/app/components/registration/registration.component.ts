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
import { ActivatedRoute } from '@angular/router';

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
    name: '',
    email: '',
    password: '',
    firstName: '',
    roles: 'ROLE_USER',
    onBehalfOf: '',
    education: '',
    gender: '',
    fatherName: '',
    motherName: '',
    dob: '',
    job: '',
    income: 0,
    houseName: '',
    branch: '',
    temple: '',
    femaleGod: '',
    star: '',
    zodiac: '',
    nativePlace: '',
    currentPlace: '',
    dosham: '',
    marritalStatus: '',
    height: '',
    details: '',
    mobile: '',
  };

  userInfoForm!: FormGroup;
  fb: FormBuilder = new FormBuilder();
  basicInfo!: FormGroup;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.userInfo.email = this.router.snapshot.paramMap.get('email') || '';
    this.userInfo.name = this.router.snapshot.paramMap.get('email') || '';
    this.userInfo.onBehalfOf =
      this.router.snapshot.paramMap.get('onBehalfOf') || '';
    this.userInfo.mobile = this.router.snapshot.paramMap.get('mobile') || '';
    this.userInfo.gender = this.router.snapshot.paramMap.get('gender') || '';
    this.userInfo.firstName =
      this.router.snapshot.paramMap.get('firstName') || '';
    this.userInfoForm = new FormGroup({
      title: new FormControl(''),
    });
  }

  onLastElementBlur(name: string) {
    (this.nextBtn.nativeElement as HTMLElement).scrollIntoView({
      behavior: 'smooth',
    });
  }
}

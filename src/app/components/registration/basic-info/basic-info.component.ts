import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProfileType, UserInfo } from '../../../models/registration.model';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
  ],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInfoComponent {
  @Input() userInfo!: UserInfo;
  @Output() lastElementBlur = new EventEmitter<string>();
  childForm!: FormGroup;

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

  onBehalfOfList: any[] = [
    { label: 'Never Married', value: 'Never Married' },
    { label: 'Widowed', value: 'Widowed' },
    { label: 'Divorced', value: 'Divorced' },
    { label: 'Awaiting divorce', value: 'Awaiting divorce' },
  ];

  starList: any[] = [
    { label: 'Asvini / அஸ்வினி', value: 'Asvini' },
    { label: 'Baraṇi / பரணி', value: 'Baraṇi' },
  ];

  zodiacList: any[] = [
    { label: 'Aries / மேஷம்', value: 'Aries' },
    { label: 'Taurus / ரிஷபம்', value: 'Taurus' },
    { label: 'Gemini / மிதுனம்', value: 'Gemini' },
    { label: 'Cancer / கடகம்', value: 'Cancer' },
    { label: 'Leo / சிம்மம்', value: 'Leo' },
    { label: 'Virgo / கன்னி', value: 'Virgo' },
    { label: 'Libra / துலாம்', value: 'Libra' },
    { label: 'Scorpio / விருச்சிகம்', value: 'Scorpio' },
    { label: 'Sagittarius / தனுசு', value: 'Sagittarius' },
    { label: 'Capricorn / மகரம்', value: 'Capricorn' },
    { label: 'Aquarius / கும்பம்', value: 'Aquarius' },
    { label: 'Pisces / மீனம்', value: 'Pisces' },
  ];

  constructor(public parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.childForm = this.parentForm.form;
    this.childForm.addControl(
      'basicInfo',
      new FormGroup({
        id: new FormControl(this.userInfo.id),
        onBehalfOf: new FormControl(
          this.userInfo.onBehalfOf,
          Validators.required
        ),
        mobile: new FormControl(this.userInfo.mobile, Validators.required),
        email: new FormControl(this.userInfo.email, Validators.required),
        password: new FormControl('', Validators.required),
        name: new FormControl(this.userInfo.name, Validators.required),
        firstName: new FormControl(
          this.userInfo.firstName,
          Validators.required
        ),
        height: new FormControl(this.userInfo.height, Validators.required),
        star: new FormControl('', Validators.required),
        zodiac: new FormControl('', Validators.required),
        dob: new FormControl(this.userInfo.dob, Validators.required),
        fatherName: new FormControl(
          this.userInfo.fatherName,
          Validators.required
        ),
        motherName: new FormControl(
          this.userInfo.motherName,
          Validators.required
        ),
        job: new FormControl(this.userInfo.job, Validators.required),
        income: new FormControl(this.userInfo.income, Validators.required),
        education: new FormControl(
          this.userInfo.education,
          Validators.required
        ),
        gender: new FormControl(this.userInfo.gender, Validators.required),
      })
    );
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserInfo } from '../../../models/registration.model';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-more-info',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, MultiSelectModule],
  templateUrl: './more-info.component.html',
  styleUrl: './more-info.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreInfoComponent {
  @Input() userInfo!: UserInfo;
  childForm!: FormGroup;

  doshams: any[] = [
    { name: 'Chevvai Dosham', code: 'Chevvai Dosham' },
    { name: 'Naga Dosham', code: 'Naga Dosham' },
    { name: 'Kala Sarpa Dosham', code: 'Kala Sarpa Dosham' },
    { name: 'Rahu Dosham', code: 'Rahu Dosham' },
    { name: 'Kethu Dosham', code: 'Kethu Dosham' },
    { name: 'Kalathra Dosham', code: 'Kalathra Dosham' },
  ];
  constructor(public parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.childForm = this.parentForm.form;
    this.childForm.addControl(
      'moreInfo',
      new FormGroup({
        houseName: new FormControl(
          this.userInfo.houseName,
          Validators.required
        ),
        branch: new FormControl('', Validators.required),
        temple: new FormControl('', Validators.required),
        femaleGod: new FormControl('', Validators.required),
        dosham: new FormControl('', Validators.required),
        star: new FormControl('', Validators.required),
        zodiac: new FormControl('', Validators.required),
        nativePlace: new FormControl('', Validators.required),
        currentPlace: new FormControl('', Validators.required),
        details: new FormControl('', Validators.required),
      })
    );
  }
}

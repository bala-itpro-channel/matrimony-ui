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

@Component({
  selector: 'app-more-info',
  standalone: true,
  imports: [ReactiveFormsModule],
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

  constructor(public parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.childForm = this.parentForm.form;
    this.childForm.addControl(
      'moreInfo',
      new FormGroup({
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
      })
    );
  }
}


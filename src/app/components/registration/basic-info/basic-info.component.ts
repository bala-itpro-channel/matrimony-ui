import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInfo } from '../../../models/registration.model';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInfoComponent {
  @Input() userInfo!: UserInfo;
  childForm!: FormGroup;
  constructor(public parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.childForm = this.parentForm.form;
    if (this.userInfo) {
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
          marritalStatus: new FormControl(
            this.userInfo.marritalStatus,
            Validators.required
          ),
          height: new FormControl(this.userInfo.height, Validators.required),
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
        })
      );
    }
  }
}

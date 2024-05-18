import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProfileType } from '../../models/registration.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-init-registration',
  standalone: true,
  imports: [
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    InputMaskModule,
    ReactiveFormsModule
  ],
  templateUrl: './init-registration.component.html',
  styleUrl: './init-registration.component.scss',
})
export class InitRegistrationComponent {
  initRegForm: FormGroup = new FormGroup({
    onBehalfOf: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
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
}

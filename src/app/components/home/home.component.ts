import { Component } from '@angular/core';
import { InitRegistrationComponent } from '../init-registration/init-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilesComponent } from '../profiles/profiles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InitRegistrationComponent, ProfilesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isRegisteredUser = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (localStorage.getItem('token')) {
      this.isRegisteredUser = true;
    }
  }
}

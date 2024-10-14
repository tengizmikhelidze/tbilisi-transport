import {Component, inject} from '@angular/core';
import {NavBarComponent} from "../../../shared/components/nav-bar/nav-bar.component";
import {ApisService} from "../../../shared/services/api/apis.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  providers: [ApisService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private apisService = inject(ApisService);

  constructor() {
    this.apisService.getPassengers().subscribe()
  }
}

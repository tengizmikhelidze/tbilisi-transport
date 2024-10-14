import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPassenger} from "../../interfaces/passenger.interface";
import {AppConfigService} from "../../app-config/app-config.service";

@Injectable()
export class ApisService {
  private https = inject(HttpClient);
  private appConfigService = inject(AppConfigService);

  getPassengers(): Observable<IPassenger> {
    return this.https.get<IPassenger>(`${this.appConfigService.readConfig().TTC_API_URL}/passengers`);
  }
}

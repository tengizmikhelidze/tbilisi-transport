import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {AppConfig} from "./app-config.interface";


@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private https = inject(HttpClient);
  private configuration: AppConfig = {
    TTC_API_URL: '',
  };

  setConfig(): Promise<void | AppConfig> {
    return firstValueFrom(this.https.get<AppConfig>('./config.json'))
      .then(
        (config: AppConfig) => this.configuration = config
      )
  }

  readConfig(): AppConfig {
    return this.configuration;
  }
}

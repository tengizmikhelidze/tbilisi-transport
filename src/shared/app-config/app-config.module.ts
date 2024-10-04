import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppConfigService} from "./app-config.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppConfigModule {

  static forRoot(): ModuleWithProviders<AppConfigModule> {
    return {
      ngModule: AppConfigModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: initConfig,
          deps: [
            AppConfigService
          ],
          multi: true,
        },
      ],
    };
  }

}

export function initConfig(appConfigService: AppConfigService) {
  return () => appConfigService.setConfig();
}

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { authInterceptorProviders } from './auth.interceptor';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [authInterceptorProviders]
})
export class CoreModule { }

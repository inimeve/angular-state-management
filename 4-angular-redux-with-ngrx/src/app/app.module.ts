import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {CoreModule} from './core/core.module';
import {CompLibModule} from './comp-lib/comp-lib.module';
import {ConfigService, configServiceInitializerFactory} from './core/config/config.service';
import {SidebarService} from './core/components/sidebar/sidebar.service';
import {EffectsModule} from '@ngrx/effects';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';

import * as fromPet from './core/store/pet/pet.reducer';
import * as fromPaymentMethod from './core/store/payment-method/payment-method.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CoreModule.forRoot(),
    CompLibModule,
    StoreModule.forRoot({
      // pets: fromPet.reducer,
      // paymentMethod: fromPaymentMethod.reducer
    }, {
      metaReducers: !environment.production ? [] : [],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceInitializerFactory,
      deps: [ConfigService, SidebarService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppStateService} from './app-state/app-state.service';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        {provide: AppStateService, useClass: AppStateService},
      ],
    };
  }

}

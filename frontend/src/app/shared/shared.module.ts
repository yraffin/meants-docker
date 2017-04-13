import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SIDEBAR_TOGGLE_DIRECTIVES } from './sidebar.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './nav-dropdown.directive';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AsideToggleDirective } from './aside.directive';
import { BreadcrumbsComponent } from './breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { KeysPipe } from './keys.pipe';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    AuthenticationModule,
    NgbModule
  ],
  declarations: [
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    PaginationComponent,
    KeysPipe,
    ConfirmModalComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    NgbModule,
    AuthenticationModule,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    PaginationComponent,
    KeysPipe
  ],
  entryComponents: [
    ConfirmModalComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  };
}

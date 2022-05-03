import {BrowserModule} from '@angular/platform-browser'
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core'
import {FlexLayoutModule} from '@angular/flex-layout'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgxMdModule} from "ngx-md"
import { CommonModule } from '@angular/common';
import {CoreModule} from "./core/core.module"
import {SharedModule} from './shared/shared.module'

import {
  HttpClientModule,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {StoreModule} from '@ngrx/store'
import {reducers, metaReducers} from './store/app.reducers'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import {EffectsModule} from '@ngrx/effects'
import {AppEffects} from './store/app.effects'
import { DevExtremeModule, DxAccordionModule, DxAutocompleteModule, DxButtonModule, DxChartModule, DxCheckBoxModule, DxCircularGaugeModule, DxContextMenuModule, DxDataGridModule, DxDateBoxModule, DxDropDownBoxModule, DxFormModule, DxListModule, DxLoadIndicatorModule, DxNumberBoxModule, DxPivotGridFieldChooserModule, DxPivotGridModule, DxPopoverModule, DxPopupModule, DxRadioGroupModule, DxResponsiveBoxModule, DxScrollViewModule, DxSelectBoxModule, DxSwitchModule, DxTabsModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule, DxTooltipModule, DxValidationSummaryModule, DxValidatorModule } from 'devextreme-angular'

const DevExtremeModules = [
  DxDataGridModule,
  DxTabsModule,
  DxCircularGaugeModule,
  DxAccordionModule,
  DxPivotGridModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxRadioGroupModule,
  DxSelectBoxModule,
  DxPivotGridFieldChooserModule,
  DxPopupModule,
  DxAutocompleteModule,
  DxTemplateModule,
  DxValidatorModule,
  DxValidationSummaryModule,
  DxLoadIndicatorModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxDateBoxModule,
  DxResponsiveBoxModule,
  DxSwitchModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxScrollViewModule,
  DxContextMenuModule,
  DxListModule,
  DxChartModule,
  DxNumberBoxModule,
  DevExtremeModule,
  DxPopoverModule,
  DxTooltipModule,
];
@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent
  ],
  exports: [
    ...DevExtremeModules
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    NgxMdModule.forRoot(),
    ...DevExtremeModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

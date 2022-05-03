import { Component, OnInit, NgModule, enableProdMode } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTileViewModule, DxButtonModule, DxListModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { Service, ServiceProvider } from './app.service';
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
  providers: [Service],
  preserveWhitespaces: true,
})
export class ReviewListComponent implements OnInit {
  dataSource: DataSource;
  currentServiceProvider: ServiceProvider;

  public leftSidebarVisibility: boolean = true

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
    this.currentServiceProvider = service.getFirstServiceProvider();
  }
  listSelectionChanged = (e) => {
    this.currentServiceProvider = e.addedItems[0];
  };

  ngOnInit(): void {
  }

  
}

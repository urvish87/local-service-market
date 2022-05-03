import {Component, OnInit} from '@angular/core'
import {ColDef, GridOptions} from "@ag-grid-community/core"
import {InfiniteRowModelModule} from "@ag-grid-community/infinite-row-model"
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model"
import {HttpClient} from "@angular/common/http"
import { ServiceProviderInfo,ServiceProviderService } from './service-provider-list.service';



@Component({
  selector: 'app-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.css'],
  providers: [ServiceProviderService],
})
export class ServiceProviderListComponent implements OnInit {
  public serviceProviderList: ServiceProviderInfo[] ;
  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  public gridOptions: GridOptions = {}
  public loading: boolean = false
  public defaultColDef = {}

  constructor(private http: HttpClient, service: ServiceProviderService) {
    this.serviceProviderList = service.getServiceProviders();
  }

  ngOnInit(): void {

  }

  log(a) {
    console.log(a);
  }



}

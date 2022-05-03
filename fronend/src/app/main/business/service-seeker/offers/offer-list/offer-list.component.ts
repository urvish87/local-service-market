import { Component, OnInit } from '@angular/core'
import { ColDef, GridOptions } from "@ag-grid-community/core"
import { InfiniteRowModelModule } from "@ag-grid-community/infinite-row-model"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { HttpClient } from "@angular/common/http"
import { OfferInfo,OfferService,OfferState} from './offer-list.service';
import { ServiceProviderService,ServiceProviderInfo} from '../../../service-provider/service-providers/service-provider-list/service-provider-list.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
  providers: [OfferService, ServiceProviderService],
})
export class ServiceSeekerOfferListComponent implements OnInit {
  public offerList: OfferInfo[] = [];
  public OfferStateList: OfferState[];
  public ServiceProviders: ServiceProviderInfo[];
  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  public gridOptions: GridOptions = {}
  public loading: boolean = false
  public defaultColDef = {}

  constructor(private http: HttpClient, service: OfferService, serviceProvider: ServiceProviderService) {
    this.offerList = service.getOffers();
    this.OfferStateList = service.getOfferStatus();
    this.ServiceProviders = serviceProvider.getServiceProviders();
  }

  ngOnInit(): void {

  }



}

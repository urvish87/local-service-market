import {Component, OnInit} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'
import { RequestService, RequestInfo,RequestCategory,RequestStatus } from './requst-list.service';
import { OfferService, OfferState } from '../../offers/offer-list/offer-list.service';
import { ServiceProviderInfo,ServiceProviderService} from '../../../service-provider/service-providers/service-provider-list/service-provider-list.service';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
  providers: [RequestService, OfferService, ServiceProviderService],
})
export class ServiceSeekerRequestListComponent implements OnInit {
  public requestList: RequestInfo[];
  public OfferStateList: OfferState[];
  public serviceProviders: ServiceProviderInfo[];
  public requstCategories: RequestCategory[];

  constructor(private sanitizer: DomSanitizer, requstService: RequestService, offerService: OfferService, serviceProviders:ServiceProviderService) {
    this.requestList = requstService.getRequests();
    this.OfferStateList = offerService.getOfferStatus();
    this.serviceProviders = serviceProviders.getServiceProviders();
    this.requstCategories = requstService.getRequstCategories();
  }

  ngOnInit(): void {
  }


}

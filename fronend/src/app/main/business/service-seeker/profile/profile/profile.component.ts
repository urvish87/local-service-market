import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProviderInfo, ServiceProviderService } from '../../../service-provider/service-providers/service-provider-list/service-provider-list.service';

@Component({
  selector: 'service-provider-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ServiceProviderService]
})
export class ServiceProviderProfileComponent implements OnInit {
  private id: string;
  public serviceProvider: ServiceProviderInfo;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private service: ServiceProviderService) {
  }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    if (!this.id) {
      this.router.navigate(['/app/service-providers/service-provider-list']);
      return;
    }
    this.serviceProvider = this.service.getServiceProviders().find(f => f.ServiceProviderID == parseInt(this.id, 10))
  }
  getHandleName(name) {
    return '@' + this.camelize(name.split(' ').join(''));
  }
  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
}

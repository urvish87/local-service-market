import {Component, OnInit} from '@angular/core'
import {ColDef, GridOptions} from "@ag-grid-community/core"
import {InfiniteRowModelModule} from "@ag-grid-community/infinite-row-model"
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model"
import {HttpClient} from "@angular/common/http"
import { ServiceSeekerService,User} from './service-seeker-profile.service';



@Component({
  selector: 'app-user',
  templateUrl: './service-seeker-profile.component.html',
  styleUrls: ['./service-seeker-profile.component.css'],
  providers: [ServiceSeekerService],
})
export class ServiceSeekerProfileComponent implements OnInit {
  public userInfo: User;
  positions: string[];

  states: string[];
  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  public gridOptions: GridOptions = {}
  public loading: boolean = false
  public defaultColDef = {}

  constructor(private http: HttpClient, service: ServiceSeekerService) {
    this.userInfo = service.getUserInfo();
    this.positions = service.getPositions();
    this.states = service.getStates();
  }

  ngOnInit(): void {

  }




}

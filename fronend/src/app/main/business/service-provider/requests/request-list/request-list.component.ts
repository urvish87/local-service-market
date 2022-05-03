import {DomSanitizer} from '@angular/platform-browser'
import * as moment from 'moment'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  public makeAnOffer: boolean = false;
  public currentVideoId: any;
  public offerInfo:any;

  public videos = [
    {
      id: 1,
      title: 'Mold problem in my basement!',
      category: 'De-infestation Treatment',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      location: [42.30401652637586,-83.0738203528894],
      posted: moment('Thu Nov 25 2021 19:20:03 GMT+0300').fromNow(),
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      id: 2,
      title: 'My house need to be painted',
      category: 'Paint',
      url: 'https://www.youtube.com/embed/nP2vtDLTAgM',
      seen: true,
      location: [42.30489400178442,-83.07470747139065],
      posted: moment('Thu Nov 25 2021 11:20:03 GMT+0300').fromNow(),
      info: ' I need to paint all my house. I am searching for a painter who can paint my house with reasonable price.',
    },
    {
      id: 3,
      title: 'My bathroom need to be renovated',
      category: 'Plumbing',
      url: 'https://www.youtube.com/embed/FYq6vM1lAEk',
      seen: true,
      location: [42.3046645713217,-83.07344482419869],
      posted: moment('Thu Nov 23 2021 13:20:03 GMT+0300').fromNow(),
      info: 'My bathroom is very old and I want to change all its pipeline so I need a professional plumber',
    },
    {
      id: 4,
      title: 'I need a car for rent',
      category: 'Vehicle rent',
      url: 'https://www.youtube.com/embed/G6LigiflRzw',
      seen: true,
      location: [42.30466859642476,-83.07361353998726],
      posted: moment('Thu Nov 20 2021 21:05:43 GMT+0300').fromNow(),
      info: 'I want to rent a car for 2 days',
    },
    {
      id: 5,
      title: 'Mold problem in my basement!',
      category: 'Plumbing',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      location: [42.304001882853974,-83.074066335847],
      posted: moment('Thu Oct 25 2021 17:30:03 GMT+0300').fromNow(),
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
  ]

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.offerInfo = {
      offerPrice: 0,
      volunteer: false
    };
  }

  getMapParams(videos: Array<any>) {
    return '?l=' + videos.map(p => p.location.join(',') + "," + p.title).join('|');
  }

  getUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  trackByFn(index, row) {
    return row.title
  }

  onItemClick(event) {
    if (event.key === 'offer') {
      this.makeAnOffer = true;
      this.currentVideoId = event.id;
    }
  }
  onOfferClose() {
    this.makeAnOffer = false; 
  }
  onVolunteer($event) {
    if ($event.value) {
      this.offerInfo = {
        offerPrice: 0,
        volunteer: $event.value
      };
    }
  }
}

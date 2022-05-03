import { Injectable } from '@angular/core';

export class RequestInfo {

  RequestID: number;
  RequestTitle: string;
  RequestStatusID: number;
  ServiceSeeker: string;
  ServiceProviderID?: number;
  RequestDate: Date;
  CloseDate?: Date;
  RequestVideoLink?: string;
  Description: string;
  RequestCategoryID: number;
  Lat?: string;
  Lng?: string;
}
export class RequestCategory {
  ID: number;
  Name: string;
}

export class RequestStatus {
  ID: number;
  Name: string;
}
const requstCategories: RequestCategory[] = [{
  ID: 1,
  Name: "Plumbing"
}, {
  ID: 2,
  Name: "Painting"
}, {
  ID: 3,
  Name: "Vehicle rent"
}, {
  ID: 4,
  Name: "De-infestation Treatment"
},
{
  ID: 5,
  Name: "Teaching"
}];
const requests: RequestInfo[] = [
  {
    RequestID: 1,
    RequestTitle: "Mold problem in my basement!",
    RequestStatusID: 1,
    ServiceProviderID: 1,
    ServiceSeeker: "Noah feera",
    RequestDate: new Date("Fri Dec 08 2019 07:44:57"),
    CloseDate: new Date("Fri Dec 08 2019 07:44:57"),
    RequestVideoLink: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
    Description: "My bathroom is very old and I want to change all its pipeline so I need a professional plumber",
    RequestCategoryID: 1,
    Lat: '42.30401652637586',
    Lng: '-83.0738203528894',
  },
  {
    RequestID: 2,
    RequestTitle: "My house need to be painted",
    RequestStatusID: 2,
    ServiceProviderID: 2,
    ServiceSeeker: "Liam sa",
    RequestDate: new Date("Fri Dec 05 2019 07:44:57"),
    CloseDate: new Date("Fri Dec 07 2019 07:44:57"),
    RequestVideoLink: "https://www.youtube.com/watch?v=RRubcjpTkks",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.",
    RequestCategoryID: 2,
    Lat: '42.30401652637586',
    Lng: '-83.0738203528894',
  },
  {
    RequestID: 3,
    RequestTitle: "I need a car for rent",
    RequestStatusID: 3,
    ServiceProviderID: 3,
    ServiceSeeker: "William jakob",
    RequestDate: new Date("Fri Dec 01 2019 07:44:57"),
    CloseDate: new Date("Fri Dec 02 2019 07:44:57"),
    RequestVideoLink: "--",
    Description: "I need to paint all my house. I am searching for a painter who can paint my house with reasonable price.",
    RequestCategoryID: 3,
    Lat: '42.30401652637586',
    Lng: '-83.0738203528894',
  },
  {
    RequestID: 4,
    RequestTitle: "My bathroom need to be renovated",
    RequestStatusID: 3,
    ServiceProviderID: 3,
    ServiceSeeker: "James Thame",
    RequestDate: new Date("Fri Dec 01 2019 07:44:57"),
    CloseDate: new Date("Fri Dec 02 2019 07:44:57"),
    RequestVideoLink: "https://www.youtube.com/watch?v=GoXwIVyNvX0",
    Description: "I want to rent a car for 2 days",
    RequestCategoryID: 4,
    Lat: '42.30401652637586',
    Lng: '-83.0738203528894',
  },
  {
    RequestID: 5,
    RequestTitle: "Mold problem in my basement!",
    RequestStatusID: 3,
    ServiceProviderID: 3,
    ServiceSeeker: "Benjamin Se",
    RequestDate: new Date("Fri Dec 01 2019 07:44:57"),
    CloseDate: new Date("Fri Dec 02 2019 07:44:57"),
    RequestVideoLink: "https://www.youtube.com/watch?v=2dZiMBwX_5Q",
    Description: "My bathroom is very old and I want to change all its pipeline so I need a professional plumber",
    RequestCategoryID: 4,
    Lat: '42.30401652637586',
    Lng: '-83.0738203528894',
  }
];

@Injectable()
export class RequestService {
  getRequests(): RequestInfo[] {
    return requests;
  }

  getRequstCategories(): RequestCategory[] {
    return requstCategories;
  }
}

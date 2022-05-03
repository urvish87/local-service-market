import { Injectable } from '@angular/core';

export class OfferInfo {

  OfferID: number;
  RequestTitle: string;
  OfferPrice: number;
  StateID: number;
  ServiceProviderID: number;
  Voluntary?: boolean;
}
export class OfferState {

  StateID: number;
  Name: string;
}

const OfferStates: OfferState[] = [{
    StateID: 1,
    Name: "Accepted",

  },
  {
    StateID: 2,
    Name: "Rejected",

  },
  {
    StateID: 3,
    Name: "Pending",

  }]
const offers: OfferInfo[] = [
  {
    OfferID: 1,
    RequestTitle: "My bathroom need to be renovated",
    OfferPrice: 0,
    StateID: 3,
    ServiceProviderID: 1,
    Voluntary:true,
    },
  {
    OfferID: 2,
    RequestTitle: "My bathroom need to be renovated",
    OfferPrice: 2000,
    StateID: 3,
    ServiceProviderID: 2
  },
  {
    OfferID: 3,
    RequestTitle: "I need a car for rent",
    OfferPrice: 3000,
    StateID: 3,
    ServiceProviderID: 3
  },
  {
    OfferID: 4,
    RequestTitle: "I need a car for rent",
    OfferPrice: 0,
    StateID: 3,
    ServiceProviderID: 4,
    Voluntary:true,
  },
];

@Injectable()
export class OfferService {
  getOffers(): OfferInfo[] {
    return offers;
  }

  getOfferStatus(): OfferState[] {
    return OfferStates;
  }
}

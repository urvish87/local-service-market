import { Injectable } from '@angular/core';

export class ServiceProviderInfo {
  ServiceProviderID: number;
  Name: string;
  Skill: string;
  Description: string;
  Rating: number;

}

const serviceProviders: ServiceProviderInfo[] = [{
  ServiceProviderID: 1,
  Name: 'Jacob Baker',
  Skill: 'Painter',
  Description: 'Painters are responsible for protecting surfaces that customers do not want painted from damage. They usually assemble painting tools and supplies, and bring them to the work site while following safety procedures and local building regulations. Additionally, they speak with their clients and help make sure they are happy with the work performed. Some of the common duties and responsibilities in a Painter job description may include',
  Rating: 1
},
{
  ServiceProviderID: 2,
  Name: 'Oliver Smith',
  Skill: 'Plumber',
  Description: 'Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel. We are currently renovating some of our guest rooms so that we can serve you better. Welcome to Hamburg and enjoy your stay.',
  Rating: 3
},
{
  ServiceProviderID: 3,
  Name: 'Charlie Smith',
  Skill: 'Plumber',
  Description: 'Thanks for visiting my GIG .. in this GIG i am serving a high quality service to draw and design Electrical,Plumbing and HVACDesigns for Permit. .',
  Rating: 4
},
{
  ServiceProviderID: 4,
  Name: 'Sarah Smith',
  Skill: 'Teacher',
  Description: 'Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel. We are currently renovating some of our guest rooms so that we can serve you better. Welcome to Hamburg and enjoy your stay.',
  Rating: 2
},
{
  ServiceProviderID: 5,
  Name: 'Jahn Jones',
  Skill: 'Teacher',
  Description: 'Enjoy the energy of Hamburg each and every night of your stay in our hotel. We are currently renovating some of our guest rooms so that we can serve you better. Welcome to Hamburg and enjoy your stay.',
  Rating: 5
},
{
  ServiceProviderID: 6,
  Name: 'Tom Groomy',
  Skill: 'Web Developer',
  Description: 'Website design plays an important role in the success of any business. You should always have a great online presence. Websites are necessary for building a brand online, attracting customers, boosting revenue, and maintaining a positive reputation. Dr JARVIS WEB SOLUTION is a leading web design company in Srilanka founded in 2015. We are adept at designing responsive, fast-loading, and user-friendly websites that offer a consistent look and feel across different web browsers. we works closely with clients to produce professional website that accelerate sales,Ask me i will help you every time. Our Team is very Professional designers, They Can create any type of Business , Ecommerce ,Event , Blog ,Corporation, non profit, etc.',
  Rating: 2
},
];

@Injectable()
export class ServiceProviderService {
  getServiceProviders(): ServiceProviderInfo[] {
    return serviceProviders;
  }
}

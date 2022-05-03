import { Injectable } from '@angular/core';

export class ServiceInfo {
  ServiceID: number;

  ServiceName: string;

  Description: string;

  IsActive: boolean;

  
}

const services: ServiceInfo[] = [{
  ServiceID: 1,
  ServiceName: 'Plumber',
  Description: ' Their main duties include installing water supply networks, installing fixtures such as sinks, toilets, and drainage systems, and repairing plumbing equipment or piping.',
  IsActive: true
},
  {
    ServiceID: 2,
    ServiceName: 'Teacher',
    Description: ' Their duties include communicating with students, as well as parents or guardians regarding student progress and development, grading tests, quizzes, and assignments, and developing educational lesson plans.',
    IsActive: true
  },
  {
    ServiceID: 3,
    ServiceName: 'Painter',
    Description: ' Their duties include preparing walls, ceilings, and floors for painting; mixing paint to match samples; and recommending paint types and colours to customers.',
    IsActive: true
  },
  {
    ServiceID: 4,
    ServiceName: 'Makeup artist',
    Description: 'The aim of this course is to provide you with the knowledge and skills required for a career as a professional Makeup Artist or as a keen hobbyist. This is an up-to-date and comprehensive course covering every aspect of makeup artistry.',
    IsActive: true
  },
  {
    ServiceID: 5,
    ServiceName: 'Web Developer',
    Description: 'Website design plays an important role in the success of any business. You should always have a great online presence. Websites are necessary for building a brand online, attracting customers, boosting revenue, and maintaining a positive reputation. Dr JARVIS WEB SOLUTION is a leading web design company in Srilanka founded in 2015. We are adept at designing responsive, fast-loading, and user-friendly websites that offer a consistent look and feel across different web browsers. we works closely with clients to produce professional website that accelerate sales,Ask me i will help you every time. Our Team is very Professional designers, They Can create any type of Business , Ecommerce ,Event , Blog ,Corporation, non profit, etc.',
    IsActive: true
  },
  {
    ServiceID: 6,
    ServiceName: 'Gardener',
    Description: 'Maintains lawns by sodding, reseeding, rolling and mowing and by operating related equipment. Plans and weeds flower beds. Applies fertilizers, pesticides and herbicides. Plants and prunes shrubs, hedges and trees.',
    IsActive: true
  },
  {
    ServiceID: 7,
    ServiceName: 'Babysitter',
    Description: 'Their responsibilities include making sure the children are safe, feeding and bathing the children when necessary, and adhering to the parents standards of care.Babysitting positions may be regular daily positions or on an as- needed basis.',
    IsActive: true
  }
];

@Injectable()
export class Service {
  getServices(): ServiceInfo[] {
    return services;
  }
}

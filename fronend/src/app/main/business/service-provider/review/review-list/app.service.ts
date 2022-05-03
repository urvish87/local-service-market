import { Injectable } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

export class ServiceProvider {


  Id: number;

  ServiceProviderName: string;

  Skill: string;

  Rating: string;

  Description: string;

  ReviewList: Array<any>;
}
export class Review {

  CustomerName: string;

  ReviewText: string;

  Rating: string;
}
const data: ServiceProvider[] = [{
  Id: 1,
  ServiceProviderName: 'Oliver Smith',
  Skill: 'Plumber',
  Rating: 'Platinum',
  Description: 'Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel. We are currently renovating some of our guest rooms so that we can serve you better. Welcome to Hamburg and enjoy your stay.',

  ReviewList: [{
    CustomerName: 'Brayan bo',
    ReviewText: 'Hi was a skillful plumber. He could discover the problem very easily. I thnik you you can trust him.',
    Rating: 'Platinum',
  },
  {
    CustomerName: 'Noah ',
    ReviewText: 'He could find Leaks in the hot water heater supply pipe and fix it. But it toke a lot of time. ',
    Rating: 'Gold',
  },
  {
    CustomerName: 'Jack Mosayed',
    ReviewText: 'we had a Leaks in the wax seal but he could not fix it completely. ',
    Rating: 'Diamond',
  },
  {
    CustomerName: 'Jacob  jayrb',
    ReviewText: 'he was Perfect. we had Clogged drains causing toilet or sink backups. He could fix it completely ',
    Rating: 'Gold',
  },
  {
    CustomerName: 'Oscar fiyach',
    ReviewText: 'our problem was Blocked drains. It was hard to fix for him. ',
    Rating: 'Platinum',
    }
  ],
},
{
  Id: 2,
  ServiceProviderName: 'Sarah Smith',
  Skill: 'Teacher',
  Rating: 'Gold',
  Description: 'Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel. We are currently renovating some of our guest rooms so that we can serve you better. Welcome to Hamburg and enjoy your stay.',

  ReviewList: [{
    CustomerName: 'Felicity Wilson ',
    ReviewText: 'She is a professional teacher.',
    Rating: 'Gold',
  },
  {
    CustomerName: 'Lydia Wilson ',
    ReviewText: 'It is Perfect ',
    Rating: 'Diamond',
  },
  {
    CustomerName: 'Lexi Johnson ',
    ReviewText: 'She is a professional teacher. I like the method of her teaching. ',
    Rating: 'Gold',
  },
  {
    CustomerName: 'Ana Davies ',
    ReviewText: 'She has a unique method for teaching and I was completely satisfied ',
    Rating: 'Gold',
  },
  {
    CustomerName: 'Omid kasma',
    ReviewText: 'Her method of teaching was a bit boring for me',
    Rating: 'Platinum',
  },
  ],
},
{
  Id: 3,
  ServiceProviderName: 'Jahn Jones',
  Skill: 'Teacher',
  Rating: 'Diamond',
  Description: 'Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel. We are currently renovating some of our guest rooms so that we can serve you better. Welcome to Hamburg and enjoy your stay.',

  ReviewList: [{
    CustomerName: 'Kambiz se',
    ReviewText: 'It is Perfect ',
    Rating: 'Diamond',
  },
  {
    CustomerName: 'Mahrokh gh',
    ReviewText: 'It is Perfect ',
    Rating: 'Diamond',
  },
  {
    CustomerName: 'Sara sghak',
    ReviewText: 'It is Perfect ',
    Rating: 'Platinum',
    },
    {
      CustomerName: 'russellhunte',
      ReviewText: 'well done.',
      Rating: 'Gold',
    },
  ],
}, {
  Id: 4,
  ServiceProviderName: 'Jacob Baker ',
  Skill: 'Painter',
  Rating: 'Gold',
  Description: 'Painters are responsible for protecting surfaces that customers do not want painted from damage. They usually assemble painting tools and supplies, and bring them to the work site while following safety procedures and local building regulations. Additionally, they speak with their clients and help make sure they are happy with the work performed. Some of the common duties and responsibilities in a Painter job description may include',

  ReviewList: [{
    CustomerName: 'Oscar Wilson ',
    ReviewText: 'He is a professional painter.',
    Rating: 'Gold',
  },
  {
    CustomerName: 'Noah Wilson ',
    ReviewText: 'his Work is Perfect ',
    Rating: 'Diamond',
  },
  {
    CustomerName: 'Thomas Johnson ',
    ReviewText: 'He is a professional painter. I like the method of her painting. ',
    Rating: 'Gold',
  },
  {
    CustomerName: 'Jessica Davies ',
    ReviewText: 'She has a unique method for painting and I was completely satisfied ',
    Rating: 'Gold',
  },
  ],
}, {
  Id: 5,
  ServiceProviderName: 'Charlie Smith',
  Skill: 'Plumber',
  Rating: 'Gold',
  Description: 'Thanks for visiting my GIG .. in this GIG i am serving a high quality service to draw and design Electrical,Plumbing and HVACDesigns for Permit. .',

  ReviewList: [
    {
      CustomerName: 'Noah ',
      ReviewText: 'Probably one of the BEST MEP designers I have worked with. Very detailed and attentive to the smallest details. I will definitely be working with Kiran and his team with all future projects.',
      Rating: 'Gold',
    },

    {
      CustomerName: 'Jacob  jayrb',
      ReviewText: 'he was Perfect. Great work. Pleasant communication. Happy with the final product. A few unnecessary errors along the way that introduced delays but I got what I was looking for',
      Rating: 'Gold',
    }
  ],
  }, {
    Id: 6,
    ServiceProviderName: 'Tom Groomy',
    Skill: 'Web Developer',
    Rating: 'Gold',
  Description: 'Website design plays an important role in the success of any business. You should always have a great online presence. Websites are necessary for building a brand online, attracting customers, boosting revenue, and maintaining a positive reputation. Dr JARVIS WEB SOLUTION is a leading web design company in Srilanka founded in 2015. We are adept at designing responsive, fast-loading, and user-friendly websites that offer a consistent look and feel across different web browsers. we works closely with clients to produce professional website that accelerate sales,Ask me i will help you every time. Our Team is very Professional designers, They Can create any type of Business , Ecommerce ,Event , Blog ,Corporation, non profit, etc.',

    ReviewList: [
      {
        CustomerName: 'brandonluehing ',
        ReviewText: 'thank you so much, its pleasure to work with you, i wish you all the best,',
        Rating: 'Gold',
      },

      {
        CustomerName: 'erezkazes jayrb',
        ReviewText: 'Enjoyed every second This seller is patient , attentive and a professional I recommend his services to anyone Again , very good seller',
        Rating: 'Gold',
      }
    ],
  },];

const dataSource = new DataSource({
  store: new ArrayStore({
    data,
    key: 'Id',
  }),
  group: 'Skill',
  searchExpr: ['ServiceProviderName', 'Skill'],
});

@Injectable()
export class Service {
  getDataSource() {
    return dataSource;
  }

  getFirstServiceProvider() {
    return data[0];
  }
}

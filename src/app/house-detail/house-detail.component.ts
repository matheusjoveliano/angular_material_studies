import { Component, OnInit } from '@angular/core';
import { House } from '../models/house';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  public house: any;
  public houseNews: House[] = [
    {
      phone: '(16) 90000-0000',
      name: 'House',
      type: 'House',
      year: '2012',
      city: 'Dublin',
      county: 'Dublin',
      size: '300m²',
      bedroom: '4',
      bathroom: '3',
      parking: 'Yes',
      price: '3000',
      photoProfile: '/assets/images/house_1.jpg',
      photos: [
        {
          photo: '/assets/images/house_1.jpg'
        },
        {
          photo: '/assets/images/house_2.jpg'
        },
        {
          photo: '/assets/images/house_3.jpg'
        },
        {
          photo: '/assets/images/house_4.jpg'
        },
        {
          photo: '/assets/images/house_5.jpg'
        },
        {
          photo: '/assets/images/house_5.jpg'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    this.house = this.houseNews[0];
  }

}

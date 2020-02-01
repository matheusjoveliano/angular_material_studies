import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public houseNews = [
    {
      id: 1,
      name: 'House 1',
      city: 'Dublin',
      photoProfile: '/assets/images/house_1.jpg',
      photo: [
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
          photo: '/assets/images/house_6.jpg'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

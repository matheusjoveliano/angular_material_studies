import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  public houseNews = [
    {
      id: 1,
      name: 'Flat',
      city: 'Cork',
      photoProfile: '/assets/images/house_1.jpg',
      photo: [
        {
          photo: '/assets/images/house_1.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'House',
      city: 'Dublin',
      photoProfile: '/assets/images/house_2.jpg',
      photo: [
        {
          photo: '/assets/images/house_2.jpg'
        }
      ]
    },
    {
      id: 3,
      name: 'Flat',
      city: 'Dublin',
      photoProfile: '/assets/images/house_3.jpg',
      photo: [
        {
          photo: '/assets/images/house_3.jpg'
        }
      ]
    },
    {
      id: 4,
      name: 'House',
      city: 'Cork',
      photoProfile: '/assets/images/house_4.jpg',
      photo: [
        {
          photo: '/assets/images/house_4.jpg'
        }
      ]
    },
    {
      id: 4,
      name: 'House',
      city: 'Dublin',
      photoProfile: '/assets/images/house_5.jpeg',
      photo: [
        {
          photo: '/assets/images/house_5.jpeg'
        }
      ]
    }
  ];

  public houseWeek = [
    {
      id: 1,
      name: 'Flat',
      city: 'Galway',
      photoProfile: '/assets/images/house_1.jpg',
      photo: [
        {
          photo: '/assets/images/house_1.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'Palace',
      city: 'Cork',
      photoProfile: '/assets/images/house_2.jpg',
      photo: [
        {
          photo: '/assets/images/house_2.jpg'
        }
      ]
    }
  ];

  public houseSelection = [
    {
      id: 1,
      name: 'House',
      city: 'Dublin',
      photoProfile: '/assets/images/house_1.jpg',
      photo: [
        {
          photo: '/assets/images/house_1.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'House',
      city: 'Dublin',
      photoProfile: '/assets/images/house_2.jpg',
      photo: [
        {
          photo: '/assets/images/house_2.jpg'
        }
      ]
    },
    {
      id: 3,
      name: 'House',
      city: 'Dublin',
      photoProfile: '/assets/images/house_3.jpg',
      photo: [
        {
          photo: '/assets/images/house_3.jpg'
        }
      ]
    },
    {
      id: 4,
      name: 'House',
      city: 'Dublin',
      photoProfile: '/assets/images/house_4.jpg',
      photo: [
        {
          photo: '/assets/images/house_4.jpg'
        }
      ]
    },
    {
      id: 4,
      name: 'House',
      city: 'Dublin',
      photoProfile: '/assets/images/house_5.jpeg',
      photo: [
        {
          photo: '/assets/images/house_5.jpeg'
        }
      ]
    }
  ];

  houseCity = [
    { value: '0', viewValue: 'Dublin' },
    { value: '1', viewValue: 'Cork' },
    { value: '2', viewValue: 'Galway' }
  ];

  houseType = [
    { value: '0', viewValue: 'House' },
    { value: '1', viewValue: 'Flat' },
    { value: '2', viewValue: 'Apartment' }
  ];

  houseSize = [
    { value: '0', viewValue: '100m²' },
    { value: '1', viewValue: '200m²' },
    { value: '2', viewValue: '300m² +' }
  ];

  housePrice = [
    { value: '0', viewValue: '2000 - 3000' },
    { value: '1', viewValue: '3000 - 4000' },
    { value: '2', viewValue: '4000 - 5000' },
    { value: '3', viewValue: '5000 - 6000' },
    { value: '4', viewValue: '6000 +' }
  ];

  expansion = false;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  goToDetail(obj) {
    this._router.navigate([`/house-detail/${obj.id}`]);
  }

  setStep(index) {
    this.expansion = index;
  }

  search() {
    this.expansion = false;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mad-friends-container',
  templateUrl: './friends-container.component.html',
  styleUrls: ['./friends-container.component.scss']
})
export class FriendsContainerComponent implements OnInit {

  mockFriends: Array<Object>

  constructor() { }

  ngOnInit() {
    this.mockFriends = [
      {
        avatar: 'http://2.bp.blogspot.com/-PYhX1SBcspc/TWLse_215zI/AAAAAAAB9gE/grEhAa68XiU/s1600/Martin_Van_Buren.jpg',
        name: 'Martin Van Buren',
        location: 'Pepsi Center'
      },
      {
        avatar: 'http://cdn.history.com/sites/2/2013/11/James_K_Polk-AB.jpeg',
        name: 'James K. Polk',
        loation: 'not shared'
      },
      {
        avatar: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTY0MTc2Mzk5/millard-fillmore-9295008-1-402.jpg',
        name: 'Millard Fillmore',
        location: 'Coors Field'
      }
    ]
  }

}

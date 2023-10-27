import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {

  name: string = '';
  CountryInfo: any = null;

  InfoCountry() {
    fetch(`http://universities.hipolabs.com/search?country=${this.name}`)
      .then((response) => response.json())
      .then((data) => {
        this.CountryInfo = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  clearCountry() {
    this.CountryInfo = null;
  }
  constructor() { }

  ngOnInit() {
  }

}

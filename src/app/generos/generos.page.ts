import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.page.html',
  styleUrls: ['./generos.page.scss'],
})
export class GenerosPage implements OnInit {
  name: string = '';
  genderPrediction: any = null;

  predictGender() {
    fetch(`https://api.genderize.io/?name=${this.name}`)
      .then((response) => response.json())
      .then((data) => {
        this.genderPrediction = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  clearGenderPrediction() {
    this.genderPrediction = null;
  }
  constructor() { }

  ngOnInit() {
  }

}

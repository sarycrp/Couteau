import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  name: string = '';
  AgePrediction: any = null;

  predictAge() {
    fetch(`https://api.agify.io/?name=${this.name}`)
      .then((response) => response.json())
      .then((data) => {
        this.AgePrediction = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  clearAgePrediction() {
    this.AgePrediction = null;
  }

  constructor() { }

  ngOnInit() {
  }

}

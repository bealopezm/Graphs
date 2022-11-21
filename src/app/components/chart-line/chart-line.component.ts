import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../../services/covid19.service';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements OnInit {

  basicData: any;
  basicOptions: any;
  subscription: any;
  config: any;
  confirmed: number[] = [];
  data: any[] = [];
  constructor(private covid19Service: Covid19Service) { }

  async ngOnInit(): Promise<void> {

    await this.covid19Service.getCountry('Spain')
      .then(res => {
        res.map((data: any, index: number) => {
          this.confirmed[index] = data.Confirmed
          this.data[index] = data.Date
        })
      })
      .catch(err => console.log(err))

    this.basicData = {
      labels: this.data,
      datasets: [
        {
          label: 'Población contagiada en España',
          data: this.confirmed,
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
        }
      ]
    };

  }

}

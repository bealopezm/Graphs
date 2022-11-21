import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19.service';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit {
  chartOptions: any;
  stackedData: any;
  stackedOptions: any;
  data: number[] = [];
  countries: any;
  subscription: any;
  config: any;

  constructor(
    private covid19Service: Covid19Service
  ) { }

  async ngOnInit(): Promise<void> {
    this.countries = ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Holy See (Vatican City State)', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Monaco', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russian Federation', 'San Marino', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Kingdom'];

    await this.covid19Service.getAllCountry()
      .then(res => {
        this.countries.map((country: any, index: number) => {
          const response = res.Countries.find((countryCovid: any) => countryCovid.Country === country)
          this.data[index] = response.TotalConfirmed
        })

      })
      .catch(err => console.log(err))

    this.stackedData = {
      labels: this.countries,
      datasets: [{
        label: 'Población contagiada',
        backgroundColor: '#42A5F5',
        data: this.data
      }]
    };

    this.stackedOptions = {
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    };

  }

}



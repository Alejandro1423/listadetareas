import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage implements OnInit {

  countries: any[] = []; // Variable para almacenar los países

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getAllCountries().subscribe(
      (data) => {
        this.countries = data;
        console.log(this.countries);
      },
      (error) => {
        console.error('Error al obtener los países', error);
      }
    );
  }
}


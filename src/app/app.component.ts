import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weatherTest';

  searchForm!: FormGroup;
  weather : any;
  weatherLoc: any;

  constructor(private fb: FormBuilder,
    private service: WeatherService  ){}
  
  ngOnInit(){
    this.searchForm = this.fb.group({
      name: [null, Validators.required]
    })
  }

  searchWeather(){
    console.log(this.searchForm.value);
    this.service.searchWeatherByCity(this.searchForm.get('name')!.value).subscribe((res)=>{
      console.log(res);
      this.weather = res.current;
      this.weatherLoc = res.location;

    })
  }

}

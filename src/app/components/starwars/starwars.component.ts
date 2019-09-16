import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss'],
  providers: [StarwarsService]
})
export class StarwarsComponent implements OnInit {

  name: string;
  height: string;

  constructor(private starwars: StarwarsService) { }

  ngOnInit() {
    this.name = 'Star Wars';
  }

  buscarDados() {
    this.starwars.getPeopleStarWars().subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.height = data.height;
    });
  }

}

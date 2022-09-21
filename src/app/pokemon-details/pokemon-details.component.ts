import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  load: boolean=false;
  details: any={}
  name='';
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.name=this.activatedRoute.snapshot.params['name'];
    this.apiService.GetPokemonByName(this.name).subscribe(result=>{
      this.details=result;
      this.load=true;
    })
  }

}

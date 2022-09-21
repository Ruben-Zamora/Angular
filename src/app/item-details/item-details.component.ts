import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  details: any={}
  name='';
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.name=this.activatedRoute.snapshot.params['name'];
    this.apiService.GetPokemonByName(this.name).subscribe(result=>{
      this.details=result;
    })
  }

}

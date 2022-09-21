import { Component, Input, OnInit } from '@angular/core';
import { ItemDetails } from '../models/item-details.models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.css']
})
export class ItemsCardComponent implements OnInit {

  load: boolean=false;
  itemDetails!: ItemDetails;
  @Input('item') itemName: string='';

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.GetItemByName(this.itemName).subscribe((result)=>{
      this.itemDetails=result;
      this.load=true;
    })
  }

}

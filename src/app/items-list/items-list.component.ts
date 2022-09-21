import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: any[]=[];
  itemFiltered: any[]=[];
  constructor(private pokeApi: ApiService) { }

  ngOnInit(): void {
    this.pokeApi.GetItemList().subscribe((itemList: any)=>{
      this.items=itemList;
      this.itemFiltered=itemList;
    })
  }

  filterItems(itemFilterName: string){
    this.itemFiltered=this.items.filter(item => item.name.toLowerCase().includes(itemFilterName.toLocaleLowerCase()));
  }

}

import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.interface';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  itemList: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItemList().subscribe((resp) => {
      this.itemList = resp.results;
    });
  };

  getItemId(url: string): string{
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

}

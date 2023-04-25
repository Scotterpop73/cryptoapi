import { Component } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoapi';
  coins: any;
  data: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  coinObjModal: any;

  //for modal
  showModal: boolean = false;
  


  constructor(private _apiservice: CryptoService){}

  ngOnInit(){
    this._apiservice.getData().subscribe(res => {
      this.data = res;
      this.coins = res;
      console.log(this.coins);
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    //this.ngOnInit();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }

  onKeypressSearch(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    if(value.length == 0){
      this.coins = this.data;
    }
    const filteredCoins = this.coins.filter((filtered: any) => filtered.name.includes(value)
    )

    console.log(filteredCoins)
    this.coins = filteredCoins;

  }

  onModalBtnClick(coin: any){
    this.coinObjModal = coin;
    this.showModal = true;
  }
  

}

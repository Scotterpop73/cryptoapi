import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output()
  onClose = new EventEmitter();
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() currentPrice = '';
  @Input() priceChange = '';
  @Input() circulationSupply = '';
  @Input() lastUpdated = '';
  @Input() priceChangePercentage24h = '';
  @Input() totalSupply = '';
  @Input() totalVolume = '';
  @Input() high24h = '';
  @Input() low24h = '';


  constructor(){}
  cancel(){
    this.onClose.emit(null);
  }

  ngOnInit(){}
}

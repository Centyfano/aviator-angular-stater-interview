import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() logs = new EventEmitter<number>();
  @Input() isEnabled! : boolean;
  num: number = 0;

  logNumber(){
    this.num += 1;

    this.logs.emit(this.num)
  }

}

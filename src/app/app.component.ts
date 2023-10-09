import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aviator';
  num: number = 0;
  buttonEnabled = false;
  button_name = 'Disable';

  getNumber(e: number){
    console.log(e)
    this.num = e
  }

  enableDisable() {
    this.buttonEnabled = !this.buttonEnabled;
    if(!this.buttonEnabled) {
      this.button_name = 'Disable'
    } 
    else{
      this.button_name = 'Enable'

    }
  }

 
}

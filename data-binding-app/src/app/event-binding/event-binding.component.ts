import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
   
  buttonName = "My Button";
  i = 0;

  
  
  
  constructor() { }
  
  btnEnable = false;

  spinnerMode = "indeterminate";
  selectDisabled = false;
  selectedOption = 1;
  inputName = "John";

  ngOnInit(): void {
  }

  save(){

    console.log("click");
  }

  inc(){
    this.i++;
    this.buttonName = "Its was clicked" + this.i + "times";

  }

  disable(){
    
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
    
    this.spinnerMode = "determinate"
    this.btnEnable = true;
    }, 3000);
    

  }


  cbChange(event) {

    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selectionChange(event){
    console.log(event);
    this.selectedOption = event.value;
  }

  inputEvent(event) {
    console.log(event);
  }

}

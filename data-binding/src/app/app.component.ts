import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string='angular-practice-001';
  getName():string{
     return `Bond, James Bond`;
    }
    names:string[]=[
    'Pisti',
    'Sanyi',
    'Laci',
    'Vali'
  ];
  name:string;
  disabled:boolean=false;

  constructor(){
    this.name=this.names[0];
    setInterval(()=>{
    let index:number=Math.floor(Math.random()*this.names.length);
    //this.name=this.names[index];
   // this.disabled=!this.disabled;
  },2000);
  }
  setName(ev:MouseEvent):void{
    console.log(ev);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {



  name:string ="Melek"
title!:string;


user = {
  id : 1,
  NameUser : "HHH",
  Age : 22
}


quantity = 10 ;

url ="data:image/jpeg;base64,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"



Alt="Image"

NameTwo ="";

color ="blue"


Change (){

  this.name ="eeeeeeeeeeeeeee"
}


Buy (){

  this.quantity --
}

onChangeInput (event:Event) {
  const el =event.target as HTMLInputElement;
  this.color =el.value 
}



ColorTwo =""

}

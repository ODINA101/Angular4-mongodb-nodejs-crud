import { Component } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



socket = io('http://localhost:3000');

items = [];

constructor(public http:Http){
this.http.get('http://localhost:3000/todos')
.map(res => res.json())
.subscribe(res => {
console.log(res);

 	
this.items = res;

});


this.socket.on('deleted',()=>{
this.http.get('http://localhost:3000/todos')
.map(res => res.json())
.subscribe(res => {
console.log(res);

 	
this.items = res;

});	
});

 

}

textfield = "";
del(id,todo) {
	this.socket.emit('delete',{id:id,todo:todo});
}

 check() {
 	if(this.textfield == "") {
alert('please enter something');
 	}else{
 		this.socket.emit('add',this.textfield);
 	}
 	this.textfield = "";
 }


  


}

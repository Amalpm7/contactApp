import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {

  constructor(private myapi:ApiService) {this.putData() }
  putData=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.viewContacts=data
      }
    )
  }
  viewContacts:any=[]


  ngOnInit(): void {
  }

}

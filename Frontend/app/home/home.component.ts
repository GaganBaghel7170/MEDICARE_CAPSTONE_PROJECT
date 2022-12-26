import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Ng2SearchPipeModule } from "ng2-search-filter";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  medicine: Medicine[]=[]
  searchText:any
  pid:any

  constructor(private mservice:MedicineService) { }

  ngOnInit(): void {
    this.mservice.getAllMedicine().subscribe(res=>{
      this.medicine=res
    })
  }
  getData(){
    alert("Login first")

  }

}
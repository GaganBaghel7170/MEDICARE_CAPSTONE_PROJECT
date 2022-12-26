import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit {

  medicine:Medicine={
    id : 0,
    name: '',
    price: 0,
    url: '',
    quantity: 0,
    type: ''
  }
  

  constructor(private mservice:MedicineService) { }

  ngOnInit(): void {
  }
  productRegistration(data : any){
    alert(data.name)
    this.medicine=data
    this.mservice.addMedicine(this.medicine).subscribe(res=>{
      if(res !=null){

        alert("Product Registered Successfully!")



    }

    else{

      alert("Registration failed! Try Again..")

     

    }
    })


  }

}
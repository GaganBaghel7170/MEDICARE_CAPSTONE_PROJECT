// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-page',
//   templateUrl: './user-page.component.html',
//   styleUrls: ['./user-page.component.css']
// })
// export class UserPageComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { UserService } from '../user.service';
// import { Wishlist } from '../wishlist';
// import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  
  medicine: Medicine[]=[]
  searchText:any
  // list: Wishlist[]=[]
  


  constructor(private pservice:MedicineService,private uservice:UserService,private router:ActivatedRoute,private rout:Router,private cservice:CartService) { }//private wservice:WishlistService
u_id:any
p_id:any

  ngOnInit(): void {

    this.u_id=this.router.snapshot.paramMap.get('id')
    // alert("welcome user "+this.u_id)

    //to show products in user page
    this.pservice.getAllMedicine().subscribe(res=>{
      this.medicine=res

    })



  }


  // getData(id:number){
    
  //   this.wservice.addToWishList(this.u_id,id).subscribe(res=>{
  //     alert("Item Added to Wishlist")

  //   })
    
  // }
  // getWishlist(){
  //   this.rout.navigate(['wishlist',this.u_id])

  // }

  addCartData(pid:number){
    this.p_id=pid
    this.cservice.addToCart(pid,this.u_id).subscribe(res=>{
      alert("item added to cart")
    });

  }

  userLogout(){
    localStorage.setItem('token','')
  }

  getCartData(){
    this.rout.navigate(['cart',this.u_id])

  }

  



}
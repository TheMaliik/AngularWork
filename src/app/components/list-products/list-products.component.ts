import { Component } from '@angular/core';
import { Product } from 'src/app/models/productt';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {




  title: string = '';


  test: string = '10';
  changeTest() {
    this.test = '12';
  }

  DeleteProduct(event: any) {
    console.log(event);
    this.listProducts = this.listProducts.filter((c) => c.id != event);
  }

  listProducts : Product[]=[
    {"id":1,"title":"Cuisinière", "image":"assets/images/cuisiniere.png", "description":"699 dt", "promotion":false, "quantity":50, "categoryId":1},
    {"id":2,"title":"Réfrigérateur", "image":"assets/images/refrigerateur.jpg", "description":"1500 dt", "promotion":false, "quantity":20, "categoryId":1},
    {"id":3,"title":"Robot Pétrin", "image":"assets/images/robot_petrin.jpg", "description":"430 dt", "promotion":false, "quantity":150, "categoryId":2},
    {"id":4,"title":"Fer à repasser", "image":"assets/images/fer_a_repasser.jpg", "description":"130 dt", "promotion":false, "quantity":100, "categoryId":2},
    {"id":5,"title":"Oppo", "image":"assets/images/Oppo.jpg", "description":"920 dt", "promotion":false, "quantity":10, "categoryId":4},
    {"id":6,"title":"TV Téléfunkun", "image":"assets/images/tv1.jpg", "description":"845 dt", "promotion":false, "quantity":50, "categoryId":5},
]





}

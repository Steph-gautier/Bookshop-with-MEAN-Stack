import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IAlert } from 'src/app/Models/Alerts';
import { ProductDisplay } from 'src/app/Models/ProductDisplay.Model';
import { Product } from 'src/app/Models/Product.Model';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers:[ProductService]
})
export class ItemComponent implements OnInit {

  public alerts: Array<IAlert> = [];
  cartItemCount: number = 0;
  @Output() cartEvent = new EventEmitter<number>();
  public globalResponse: any;
  yourByteArray:any;
  allProducts: ProductDisplay[];
  productAddedTocart:Product[];
  selfProduct: Product;
  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit() {
    this.selfProduct = {
      Id:1,
      Name: 'Violet Bag',
      Description:'A simple and lighter',
      BillingAddress:'Buea',
      UnitPrice:32.76,
      Category:'Bags',
      Quantity:250,
      ImageFile:null,
      TC:null,
      SellerId:null,
      SellerName:null,
    }
  }
  addtoCart(product: Product){
    console.log(product);
    this.productAddedTocart=this.productService.getProductFromCart();
          if(this.productAddedTocart == null)
            {   
                this.productAddedTocart=[];
                this.productAddedTocart.push(product);
                this.productService.addProductToCart(this.productAddedTocart);
                this.alerts.push({
                  id: 1,
                  type: 'success',
                  message: 'Product added to cart.'
                });
                console.log('Product added successfully!');
                setTimeout(()=>{   
                  this.closeAlert(this.alerts);
             }, 3000);
             
          } 

              else
              {
                let tempProduct=this.productAddedTocart.find(p=>p.Id==product.Id);
                if(tempProduct==null)
                {
                  this.productAddedTocart.push(product);
                  this.productService.addProductToCart(this.productAddedTocart);
                  this.alerts.push({
                    id: 1,
                    type: 'success',
                    message: 'Product added to cart.'
                  });
                  console.log('Product added successfully!');
                  //setTimeout(function(){ }, 2000);
                  setTimeout(()=>{   
                    this.closeAlert(this.alerts);
               }, 3000);
                }
                else
                {
                  this.productAddedTocart.push(product);
                  this.productService.addProductToCart(this.productAddedTocart);
                  this.alerts.push({
                    id: 2,
                    type: 'warning',
                    message: 'Product already exist in cart.'
                  });
                  console.log('This product already exist!');
                  setTimeout(()=>{   
                    this.closeAlert(this.alerts);
               }, 3000);

                }
              }
              //console.log(this.cartItemCount);
              this.cartItemCount=this.productAddedTocart.length;
              // this.cartEvent.emit(this.cartItemCount);
              this.cartService.updateCartCount(this.cartItemCount);
              console.log(this.productAddedTocart);
            }
            public closeAlert(alert:any) {
              const index: number = this.alerts.indexOf(alert);
              this.alerts.splice(index, 1);
          }   
}



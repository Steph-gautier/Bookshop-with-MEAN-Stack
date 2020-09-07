import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare var paypal;

export interface Transaction {
  item: string;
  quantity: number;
  cost: number;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PaymentComponent implements OnInit {
  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;

  product = {
    price: 777.2,
    description: 'used couch, decent condition'
  };

  paidFor: boolean;

  expandedElement: Transaction | null;
  
  constructor() { }

  ngOnInit() {
   paypal.Buttons({
      style: {
        layout:  'vertical',
        color:   'gold',
        shape:   'rect',
        label:   'pay'
      },
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.product.description,
              amount: {
                currency_code: 'USD',
                value: this.product.price
              }
            }
          ]
        });
      },
      onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);
  }

  displayedColumns: string[] = ['item','quantity', 'cost'];
  transactions: Transaction[] = [
    {item: 'Advanced Physics book',quantity:1, cost: 4,position: 1, weight: 1.0079, symbol: 'H', description: `The best book for acquiring knowwledge on physics for engineering and nuclear phisicsatomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
    {item: 'La drague pour les nuls',quantity:1, cost: 5,position: 1, weight: 1.0079, symbol: 'H', description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
    {item: 'School bag',quantity:1, cost: 2,position: 1, weight: 1.0079, symbol: 'H', description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
    {item: 'Cambridge dictionary',quantity:1, cost: 4, position: 1, weight: 1.0079, symbol: 'H', description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
    {item: 'Linear Algebra vol N°2',quantity:1, cost: 25, position: 1, weight: 1.0079, symbol: 'H', description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
    {item: 'No pain no gain (drama)',quantity:1, cost: 15, position: 1, weight: 1.0079, symbol: 'H', description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  ];

  /** Gets the total cost of all transactions.      reduce((acc, value) => acc + value, 0)*/
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value);
  }
  getTotalQuantity() {
    return this.transactions.map(t => t.quantity).reduce((acc, value) => acc + value);
  }

  
}

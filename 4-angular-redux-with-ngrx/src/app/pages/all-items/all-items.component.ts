import {Component, OnInit} from '@angular/core';
import {PaymentMethodService} from '../../core/store/payment-method/payment-method.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {

  constructor(private paymentMethodService: PaymentMethodService) {
  }

  ngOnInit() {
    this.paymentMethodService.loadPaymentMethods();
  }

  addPaymentMethod() {
    this.paymentMethodService.addPaymentMethod({id: 'Prueba', expiration: new Date()});
  }

}

import {Component, OnInit} from '@angular/core';
import {PaymentMethodService} from '../../core/store/payment-method/payment-method.service';
import {PetService} from '../../core/store/pet/pet.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {

  constructor(private paymentMethodService: PaymentMethodService, private petService: PetService) {
  }

  ngOnInit() {
    this.paymentMethodService.loadPaymentMethods();
    this.petService.loadPets();
  }

  addPaymentMethod() {
    this.paymentMethodService.addPaymentMethod({id: 'Prueba', expiration: new Date()});
  }

}

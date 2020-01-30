import { Component, OnInit } from '@angular/core';
import { Address } from './address';
import { NgForm } from '@angular/forms';
import { AddressService } from './address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FormValidation';

  address: Address = new Address();
  // addressForm: FormGroup; /** reactive forms validation **/

  constructor(private addressService: AddressService) {

  }

  ngOnInit() {
  }

  submitAddress(form: NgForm) {
    console.log(form);
  }

  loadAddressByZipCode() {
    this.addressService.getAddressByZipCode(this.address.zipCode)
      .subscribe(
        res => {
          this.address.loadDataGotByZipCode(res);
        },
        err => {
        }
      );
  }

  /**
   * reactive forms validation
   */
  // buildForm() {
  //   this.addressForm = new FormGroup({
  //     'zipCode': new FormControl(this.address.zipCode, [Validators.required]),
  //     'street': new FormControl(this.address.street, [Validators.required]),
  //     'number': new FormControl(this.address.number, [Validators.required]),
  //     'complement': new FormControl(this.address.complement),
  //     'district': new FormControl(this.address.district, [Validators.required]),
  //     'state': new FormControl(this.address.state, [Validators.required]),
  //     'city': new FormControl(this.address.city, [Validators.required]),
  //   });
  // }

}

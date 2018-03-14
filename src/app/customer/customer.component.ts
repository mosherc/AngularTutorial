import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  formTitle = 'Signup';

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: '',
      // lastName:{value'n/a', disabled:true}
      email: '',
      sendCatalog: true
    })

    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)
    // });
    // how to set controls without form builder
  }
  
  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    alert(JSON.stringify(this.customerForm.value));
  }
  
  populateTestData() {
    this.customerForm.patchValue({
      firstName: "Colin",
      lastName: "Mosher"
    })
    // setValue must set all controls, patchValue can set any number of controls
  }

}

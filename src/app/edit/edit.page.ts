import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule , ReactiveFormsModule,  } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class EditPage implements OnInit {

  editForm: FormGroup;
   userdata: any;
   url :any;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router
  ) { 

    
    // this.userdata = this.router.getCurrentNavigation()?.extras?.state;
    // console.log(this.userdata);

    this.editForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone :new FormControl('', [Validators.required]),
    });
  
  }

  ngOnInit() {
    this.userdata = this.router.getCurrentNavigation()?.extras?.state;
    console.log("user:",this.userdata);

    
    this.editForm.controls['firstName'].setValue(this.userdata.firstName);
    this.editForm.controls['lastName'].setValue(this.userdata.lastName);
    this.editForm.controls['address'].setValue(this.userdata.address);
    this.editForm.controls['phone'].setValue(this.userdata.phone);

    this.url = this.userdata.image;

  }

  openImageInput() {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', (event: any) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.url = reader.result as string;
      
      };
      reader.readAsDataURL(file);
    });
    input.click();

  }
  
  onEdit(value:any){
    this.userdata.firstName = value.firstName;
    this.userdata.lastName = value.lastName;
    this.userdata.address = value.address;
    this.userdata.phone = value.phone;
    this.userdata.image = this.url;

    this.router.navigate(['/view'], { state: this.userdata });
  }

}

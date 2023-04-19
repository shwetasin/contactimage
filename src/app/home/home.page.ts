import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule],
})
export class HomePage {
  url: any;

  contactForm: FormGroup;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router
  ) {

    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });

  }

  onSubmit(value: any) {
    value.image = this.url;
    console.log(value);
    this.router.navigate(['/view'], { state: value });


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
  
  

  // onFileInputChange(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (event: any) => {
  //       this.url = event.target.result;
  //     }
  //   }
  // }
}

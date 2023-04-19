import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewPage implements OnInit {
   url:any;
   contact :any;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router
  ) { 

    const data = this.router.getCurrentNavigation()?.extras.state;
    this.contact = data;
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }


  routeclick(data: any) {
    console.log("datadatadata",data)
    this.router.navigate(['/edit'], {state: data });

  }
  ngOnInit() {

    
  }

}

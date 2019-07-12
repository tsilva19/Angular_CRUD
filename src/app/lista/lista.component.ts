import { Component, OnInit } from '@angular/core';
import Business from '../Business';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  businesses: Business[];
  id: any

  constructor(public businessService: BusinessService, private router: Router) { }
      

  ngOnInit() {
      this.businessService
      .getBusinness()
      .subscribe((data: Business[]) =>{
        this.businesses = data;
      });
   
  }

      deleteBusiness(id){
        this.businessService.deleteBusiness(id)
        .subscribe(res =>{
          console.log(' Cadastro Deletado');
          this.businessService.getBusinness()
          .subscribe((data: Business[]) =>{
            this.businesses = data;
        });
        
      });
    }

  }

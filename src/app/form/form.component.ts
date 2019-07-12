import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import { Router, ActivatedRoute } from '@angular/router';
import Business from '../Business';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  businesses: Business[];
id: any;
  constructor(public businessService: BusinessService, public router: Router, public route: ActivatedRoute) { 
    

  }

  enviar(nome, cpf, email, telefone){
   
      this.businessService.salvar(nome, cpf, email, telefone);
      this.router.navigate(['lista']);
      this.businessService.getBusinness()
          .subscribe((data: Business[]) =>{
            this.businesses = data;
        });
    }
    
  
  ngOnInit() {
  }

  

  gotoHome() {
    this.router.navigate(['']);
   }
}

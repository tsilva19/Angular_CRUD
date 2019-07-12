import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  business: any = {};
  angForm: FormGroup;
  constructor(public businessService: BusinessService, public route: ActivatedRoute, public router: Router
    , private  fb: FormBuilder) { this.createForm(); }

  createForm() {
    this.angForm = this.fb.group({
        nome: ['' ],
        cpf: ['' ],
        email: [''],
        telefone:['']
      });
    }

    ngOnInit() {
      this.route.params.subscribe( params => {
        this.businessService.getBusinnessById(params['id']).subscribe(res =>{
          this.business = res;
        })
      });
  }

  atualizar(nome, cpf, email, telefone){
    this.route.params.subscribe(params => {
      this.businessService.editar(nome, cpf, email, telefone, params['id']);
     
    })
    
  }

 

}

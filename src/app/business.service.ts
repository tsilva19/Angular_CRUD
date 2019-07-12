import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  uri = 'http://localhost:4000/business';

  id: any;

  constructor(private http: HttpClient) { 
     

  }

  salvar(nome, cpf, email, telefone){
    const obj = {
      nome:nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log("Cadastro Realizado Com Sucesso !!!!"));
  }
  

  getBusinness(){
       return  this.http.get(`${this.uri}`)
        
  }

  getBusinnessById(id){
   return  this.http.get(`${this.uri}/edit/${id}`);
    
  }
  
  editar(nome, cpf, email, telefone, id) {
    const obj = {
      nome:nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
    };
  this.http.post(`${this.uri}/edit/${id}`, obj)
  .subscribe(res => console.log("Cadastro Atualizado !!!!"));
  }

  deleteBusiness(id){

     return this
              .http
              .get(`${this.uri}/delete/${id}`);
             
  
  }

}

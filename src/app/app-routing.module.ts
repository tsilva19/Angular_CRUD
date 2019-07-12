import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';




const routes: Routes = [

  {  path: '', component: ContentComponent },
   { path: 'form', component: FormComponent },
   {
    path: 'edit/:id', component: EditarComponent},
  
   { path: 'lista', component: ListaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

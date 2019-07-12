import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { BusinessService } from './business.service';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    FormComponent,
    ListaComponent,
    EditarComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './componenets/add/add.component';
import { ShowComponent } from './componenets/show/show.component';
import { SearchComponent } from './componenets/search/search.component';
import { ShowsearcheddataComponent } from './componenets/showsearcheddata/showsearcheddata.component';
import{ FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent,
    SearchComponent,
    ShowsearcheddataComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

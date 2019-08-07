import { NgModule } from'@angular/core';
import { Routes, RouterModule } from'@angular/router';
import { ShowsearcheddataComponent } from './componenets/showsearcheddata/showsearcheddata.component';
import { SearchComponent } from './componenets/search/search.component';
import { AddComponent } from './componenets/add/add.component';
import { ShowComponent } from './componenets/show/show.component';

const routes: Routes = [
 {path:'',redirectTo:'listproduct',pathMatch:'full'},
 {path:'listproduct',component:ShowComponent},
 {path:'add',component:AddComponent},
 {path:'search',component:SearchComponent},
 {path:'showsearcheddata',component:ShowsearcheddataComponent}
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }









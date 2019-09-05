import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FarmerComponent} from './component/farmer/farmer.componet';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: FarmerComponent},
  {path: 'app', component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

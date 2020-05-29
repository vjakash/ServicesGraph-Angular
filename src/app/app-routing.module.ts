import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { GraphsComponent } from './graphs/graphs.component';


const routes: Routes = [{
  path:"",
  component:ListComponent
},{
  path:"create",
  component:CreateComponent
},{
  path:"edit/:id",
  component:EditComponent
},{
  path:"graphs",
  component:GraphsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

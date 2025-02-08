import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';

const routes: Routes = [
  {path: "", component: ReverseStringComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

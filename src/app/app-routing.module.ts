import { DetailPostComponent } from './detail-post/detail-post.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ' ', component:DashboardComponent},
  { path: 'blog', component:BlogComponent},
  { path: 'detail/:id', component:DetailPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

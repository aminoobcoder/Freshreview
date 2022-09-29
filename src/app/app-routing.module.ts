import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PostDetailComponent } from './Components/post-detail/post-detail.component';

// { path:'', redirectTo: '/home', pathMatch: 'full' },
//{ path:'', component: HomeComponent },


const routes: Routes = [
  { path:'', redirectTo: '/posts', pathMatch: 'full' },
  { path:'posts', component: HomeComponent},
  { path:'posts/:id', component: PostDetailComponent },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ HomeComponent, PageNotFoundComponent, PostDetailComponent ]

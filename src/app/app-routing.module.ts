import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedComponent } from './med/med.component';
import { MedoperationsComponent } from './medoperations/medoperations.component';
// import { SecurityComponent } from './security/security.component';
// import { ReactiveformComponent } from './reactiveform/reactiveform.component';
// import { TempformComponent } from 'tempform/tempform.component';

const routes: Routes = [
  {path:'',component:MedComponent},
  {path:'medoperations',component:MedoperationsComponent}
  // {path:'security',component:SecurityComponent},
  // {path:'react',component:ReactiveformComponent},
  // {path:'temp',component:TempformComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

 

// const routes: Routes = [];

 

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

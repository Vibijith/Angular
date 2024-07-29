import { Routes } from '@angular/router';

// import { SingleDistricPageComponent } from './pages/single-distric-page/single-distric-page.component';

export const routes: Routes = [
    // {
    //     path:'',component:HomeComponent

    // },
    {
        path:'',loadComponent:()=>import('./pages/home/home.component').then((m)=> m.HomeComponent)
    },
    {
        path:'login',loadComponent:()=>import('./pages/login/login.component').then((m)=> m.LoginComponent)
    },
    // {
    //     path:'contact',component:ContactComponent
    // },
    {
        path:'contact',loadComponent:()=>import('./pages/contact/contact.component').then((m)=> m.ContactComponent)
    },
    // {
    //          path:'productdetails/:id',component:ProductdetailsComponent
    //     }
    {
        path:'productdetails/:id',loadComponent:()=>import('./pages/productdetails/productdetails.component').then((m)=> m.ProductdetailsComponent)
    },
        

    // {
    //     path:'single-distric-page',component:SingleDistricPageComponent
    // }

];

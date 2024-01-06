import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './pages/about/about.component';

NgModule({
    imports : [
        CardModule,
        ButtonModule,
    ]
})

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent}, 
    {path:'about',component:AboutComponent}    
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

NgModule({
    imports : [
        CardModule,
        ButtonModule,
    ]
})

export const routes: Routes = [
    {path:'home',component:HomeComponent},     
];

import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from '../contact/contact.component';
import { features } from 'process';
import { FeaturesComponent } from '../features/features.component';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        NavbarComponent,
        FooterComponent,
        AboutComponent,
        ContactComponent,
        FeaturesComponent
    ]
})
export class HomeComponent {
  title=' ZEDSMS TECHNOLOGY.'
  h1= 'Welcome to '
  paragraph='To provide a the best solutions, websites development and mobile developments'

}

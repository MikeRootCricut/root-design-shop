import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'services',
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    title: 'contact-us',
  },
];

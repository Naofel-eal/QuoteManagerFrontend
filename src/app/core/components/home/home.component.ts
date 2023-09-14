import { Component } from '@angular/core';
import { NavItem } from '../../models/NavItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public navItems: NavItem[] = [
    new NavItem('Company', 'assets/img/company.png', 'Manage your companies', 'company'),
    new NavItem('Client', 'assets/img/client.png', 'Manage the clients of your companies !', 'client'),
    new NavItem('Quote', 'assets/img/quote.png', 'Manage the quotes of your companies !', 'quote'),
    new NavItem('Profile', 'assets/img/profile.png', 'Manage your email address or your password', 'profile')
  ]

}

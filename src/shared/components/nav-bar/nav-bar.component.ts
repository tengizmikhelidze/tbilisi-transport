import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  currentTheme = 'light';
  navItems = [
    { name: 'ჩვენს შესახებ', link: '/about' },
    { name: 'სერვისები', link: '/services' },
    { name: 'სტრუქტურა', link: '/structure' },
    { name: 'შესყიდვები', link: '/tenders' },
    { name: 'კონტაქტი', link: '/contact' },
    { name: 'ვაკანსიები', link: '/vacancies' }
  ];

  ngOnInit() {
    this.setDefaultTheme();
  }

  setDefaultTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.currentTheme = prefersDarkScheme ? 'dark' : 'light';
    document.body.setAttribute('data-theme', this.currentTheme);
  }

  switchTheme(theme: string) {
    this.currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
  }
}

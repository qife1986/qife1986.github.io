import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'ducem-navbar',
  standalone: true,
  imports: [CommonModule, InlineSVGModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  onClickMenuIcon(menuBody:HTMLDivElement) {
    menuBody.classList.toggle("nav-menu-visible")
  }
}

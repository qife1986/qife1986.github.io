import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'ducem-home',
  standalone: true,
  imports: [CommonModule,InlineSVGModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}

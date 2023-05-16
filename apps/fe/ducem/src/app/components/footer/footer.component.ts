import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'ducem-footer',
  standalone: true,
  imports: [CommonModule,InlineSVGModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}

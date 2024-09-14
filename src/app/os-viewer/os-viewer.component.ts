import { Component, Input } from '@angular/core';
import { OSData } from './osTypes';

@Component({
  selector: 'app-os-viewer',
  standalone: true,
  imports: [],
  templateUrl: './os-viewer.component.html',
  styleUrl: './os-viewer.component.sass'
})

export class OsViewerComponent {
  @Input({ required: true }) osData: OSData = { id: '', name: '' };
}

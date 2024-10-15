import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-dialog-data-example',
  standalone: true,
  imports: [ MaterialModule],
  templateUrl: './dialog-data-example.component.html',
  styleUrl: './dialog-data-example.component.css'
})
export class DialogDataExampleComponent {
  data = inject(MAT_DIALOG_DATA);
}

import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Supplier } from '../../../models/supplier';

@Component({
  selector: 'app-dialog-data-example',
  standalone: true,
  imports: [ MaterialModule,MatFormFieldModule,FormsModule],
  templateUrl: './dialog-data-example.component.html',
  styleUrl: './dialog-data-example.component.css'
})
export class DialogDataExampleComponent {
  proveedor:Supplier;
  data = inject(MAT_DIALOG_DATA);
  ngOnInit(){
    this.proveedor=this.data.proveedor;
  }
}

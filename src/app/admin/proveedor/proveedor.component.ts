import { Component, inject, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Supplier } from '../../models/supplier';
import { ProveedorService } from '../../services/proveedor.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleComponent } from './dialog-data-example/dialog-data-example.component';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css',
})
export class ProveedorComponent {
  displayedColumns: string[] = [
    'idSupplier',
    'name',
    'surname',
    'phone',
    'email',
    'address',
  ];
  dataSource: MatTableDataSource<Supplier>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  constructor(private proveedorService:ProveedorService) {
    
  }
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogDataExampleComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  ngOnInit(){
    this.proveedorService.findAll().subscribe(data=>this.dataSource=new MatTableDataSource(data));
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}



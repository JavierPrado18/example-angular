import { Component, inject, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Supplier } from '../../models/supplier';
import { ProveedorService } from '../../services/proveedor.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleComponent } from './dialog-data-example/dialog-data-example.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

const PROVEEDOR_DATA: Supplier[] = [
  { idSupplier: 1, name: 'Juan', surname: 'Pérez García', phone: '123456789', email: 'juan@example.com', address: 'Calle 1, Ciudad' },
  { idSupplier: 2, name: 'María', surname: 'González López', phone: '987654321', email: 'maria@example.com', address: 'Avenida 2, Pueblo' },
  { idSupplier: 3, name: 'Carlos', surname: 'Rodríguez Martínez', phone: '456789123', email: 'carlos@example.com', address: 'Plaza 3, Villa' },
  { idSupplier: 4, name: 'Ana', surname: 'Sánchez Fernández', phone: '789123456', email: 'ana@example.com', address: 'Carrera 4, Municipio' },
  { idSupplier: 5, name: 'Pedro', surname: 'Ramírez Torres', phone: '321654987', email: 'pedro@example.com', address: 'Paseo 5, Localidad' },
  { idSupplier: 6, name: 'Laura', surname: 'Gómez Díaz', phone: '654987321', email: 'laura@example.com', address: 'Ronda 6, Barrio' },
  { idSupplier: 7, name: 'Miguel', surname: 'Hernández Ruiz', phone: '147258369', email: 'miguel@example.com', address: 'Travesía 7, Distrito' },
  { idSupplier: 8, name: 'Isabel', surname: 'Jiménez Moreno', phone: '258369147', email: 'isabel@example.com', address: 'Bulevar 8, Zona' },
  { idSupplier: 9, name: 'David', surname: 'Álvarez Muñoz', phone: '369147258', email: 'david@example.com', address: 'Callejón 9, Sector' },
  { idSupplier: 10, name: 'Sofía', surname: 'Romero Alonso', phone: '741852963', email: 'sofia@example.com', address: 'Pasaje 10, Urbanización' },
];



@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [MaterialModule,MatFormFieldModule, MatInputModule, MatSelectModule],
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
    'acciones'
  ];
  dataSource: MatTableDataSource<Supplier>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  constructor(private proveedorService:ProveedorService) {
    
  }
  dialog = inject(MatDialog);

  openDialog(proveedor:Supplier) {
    this.dialog.open(DialogDataExampleComponent, {
      data: {
        proveedor
      },
    });
  }

  ngOnInit(){
    // this.proveedorService.findAll().subscribe(data=>this.dataSource=new MatTableDataSource(data));
    this.dataSource=new MatTableDataSource(PROVEEDOR_DATA)
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



import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { NgFor } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [NgFor,MatTableModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit{

  //empleado: Empleado[] = [];
  dataSource: MatTableDataSource<Empleado>;
  displayedColumns: string[] = ['codigoEmple','nombreEmple','fechaDeIngreso','salarioEmple','nombreArea'];

  constructor(private empleadoService: EmpleadoService){}

  ngOnInit(){
    this.empleadoService.listarEmpleados().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data)
    });
  }

}

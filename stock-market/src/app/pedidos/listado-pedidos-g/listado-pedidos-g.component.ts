import { Component, OnInit } from '@angular/core';
import {ModalService } from 'src/app/pedidos/modal';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-listado-pedidos-g',
  templateUrl: './listado-pedidos-g.component.html',
  styleUrls: ['./listado-pedidos-g.component.css']
})
export class ListadoPedidosGComponent implements OnInit {


  tableTitle1: string | undefined;
  tableTitle2: string | undefined;

  pedidoNum:any;
  pedidoDescripcion:any;
  pedidoEstado: any;

  pedidoData:any=[
    {num:"Pedido 1",descripcion:"Sarmiento",estado:"pendiente"},
    {num:"Pedido 2",descripcion:"Sanchez",estado:"pendiente"},
    {num:"Pedido 3",descripcion:"Perez",estado:"entregado"},
    {num:"Pedido 4",descripcion:"Nava",estado:"pendiente"},
    {num:"Pedido 5",descripcion:"Duran",estado:"entregado"},
    {num:"Pedido 6",descripcion:"Allende",estado:"pendiente"},
  
  
  ];


  //newww
    datos: any | undefined;

    columnas = [
      {field:'id',header:'NroId'},
      {field:'name',header:'Nombre'},
      {field:'username',header:'Usuario'},
      {field:'email',header:'Correo'},

    ];

  
    buttonsNames: string[] | undefined;


  constructor(public modalService:ModalService, private userservice:UserService ) { }

  ngOnInit(): void {
    this.tableTitle1 = "Nro. Pedido";
    this.tableTitle2 = "Cliente"




    //newww
    this.cargarDatos();

    this.buttonsNames = ['Ver Pedido','Cambiar Estado'];

  }

  changeStateOrder(pedido:any){
    console.log("Presionó el boton");
    console.log(pedido.estado);
  }
  seeOrder(pedido:any){
    console.log("Presionó el boton");
    console.log(pedido.descripcion);
  }

  rellenarPedido(pedido:any){
    this.pedidoNum = pedido.num;
    console.log("click 2")
    this.pedidoEstado = pedido.estado;
    this.pedidoDescripcion = pedido.descripcion;

  }


  cargarDatos(){

    this.userservice.getUser().subscribe((data) =>  {
     
      this.datos = data
    });

  }

  funcionBoton( names: any){
    if(names[0] == "Ver Pedido")
    {
        console.log("papa: ver pedido")


    }
    else{

      console.log("papa: cambiar estado")


    }


  }




}

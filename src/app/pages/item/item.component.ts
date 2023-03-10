import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto: ProductoDescripcion = {};
  id: any;


  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) {}

  ngOnInit(): void {

    this.route.params
    .subscribe( parametros => {
      console.log(parametros['id']);

      this.productoService.getProducto(parametros['id'])
        .subscribe( (producto: any) => {
          this.id = parametros['id']
          this.producto = producto;
        });
    });
    
  }

}

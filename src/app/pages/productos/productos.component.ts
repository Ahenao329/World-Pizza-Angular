// import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-productos',
//   templateUrl: './productos.component.html',
//   styleUrls: ['./productos.component.css']
// })
// export class ProductosComponent implements AfterViewInit {

//   @ViewChild('slider') contenedor!: ElementRef;
//   @ViewChild('btnizquierda') btnIzquierdo!: ElementRef;
//   @ViewChild('btnderecha') btnDerecho!: ElementRef;

//   ngAfterViewInit(): void {
//      // EVENTO PARA EL BOTON DERECHO
//      this.btnDerecho.nativeElement.addEventListener("click", () => {
//           if (this.contenedor.nativeElement instanceof HTMLElement) {
//               this.contenedor.nativeElement.scrollLeft += this.contenedor.nativeElement.offsetWidth;  
//           }
//      });

//      // EVENTO PARA EL BOTON IZQUIERDO
//      this.btnIzquierdo.nativeElement.addEventListener("click", () => {
//           if (this.contenedor.nativeElement instanceof HTMLElement) {
//               this.contenedor.nativeElement.scrollLeft -= this.contenedor.nativeElement.offsetWidth;  
//           }
//      });
//   }
// }

// import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-productos',
//   templateUrl: './productos.component.html',
//   styleUrls: ['./productos.component.css']
// })
// export class ProductosComponent implements AfterViewInit {
//   @ViewChild('slider') contenedor!: ElementRef;
//   @ViewChild('btnizquierda') btnIzquierdo!: ElementRef;
//   @ViewChild('btnderecha') btnDerecho!: ElementRef;

//   constructor(private renderer: Renderer2) {}

//   ngAfterViewInit(): void {
//     // EVENTO PARA EL BOTON DERECHO
//     this.renderer.listen(this.btnDerecho.nativeElement, 'click', () => {
//       this.contenedor.nativeElement.scrollLeft += this.contenedor.nativeElement.offsetWidth;
//     });

//     // EVENTO PARA EL BOTON IZQUIERDO
//     this.renderer.listen(this.btnIzquierdo.nativeElement, 'click', () => {
//       this.contenedor.nativeElement.scrollLeft -= this.contenedor.nativeElement.offsetWidth;
//     });
//   }
// }



import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements AfterViewInit {

  @ViewChild('slider') contenedor!: ElementRef;
  @ViewChild('btnizquierda') btnIzquierdo!: ElementRef;
  @ViewChild('btnderecha') btnDerecho!: ElementRef;

  intervalo: any; // Variable para almacenar el intervalo

  ngAfterViewInit(): void {
    // Iniciar el intervalo para cambiar las imágenes cada 15 segundos
    this.iniciarIntervalo();

    // Detener el intervalo cuando el mouse entra al área del slider
    this.contenedor.nativeElement.addEventListener('mouseenter', () => {
      clearInterval(this.intervalo);
    });

    // Reanudar el intervalo cuando el mouse sale del área del slider
    this.contenedor.nativeElement.addEventListener('mouseleave', () => {
      this.iniciarIntervalo();
    });

    // EVENTO PARA EL BOTON DERECHO
    this.btnDerecho.nativeElement.addEventListener("click", () => {
      this.scrollRight();
    });

    // EVENTO PARA EL BOTON IZQUIERDO
    this.btnIzquierdo.nativeElement.addEventListener("click", () => {
      this.scrollLeft();
    });
  }

  // Función para iniciar el intervalo
  iniciarIntervalo() {
    this.intervalo = setInterval(() => {
      this.scrollRight();
    }, 5000); // 3 segundos
  }

  // Función para desplazar el slider hacia la derecha
  scrollRight() {
    if (this.contenedor.nativeElement instanceof HTMLElement) {
      const scrollWidth = this.contenedor.nativeElement.scrollWidth;
      const scrollLeft = this.contenedor.nativeElement.scrollLeft;
      const clientWidth = this.contenedor.nativeElement.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      const scrollAmount = clientWidth; // Cantidad a desplazar
  
      if (scrollLeft >= maxScrollLeft) {
        // Si hemos llegado al final, volvemos al inicio
        this.contenedor.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
                this.contenedor.nativeElement.scrollLeft += scrollAmount;

      } else {
        // Si no hemos llegado al final, desplazamos a la siguiente posición
        this.contenedor.nativeElement.scrollLeft += scrollAmount;
      }
    }
  }

  // Función para desplazar el slider hacia la izquierda
  scrollLeft() {
    if (this.contenedor.nativeElement instanceof HTMLElement) {
      this.contenedor.nativeElement.scrollLeft -= this.contenedor.nativeElement.clientWidth;
    }
  }
}


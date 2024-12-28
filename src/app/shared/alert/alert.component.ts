import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @ViewChild('btnTop') btnTop!: ElementRef;
  @ViewChild('logo') logo!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll", () => {
      const scroll: number = document.documentElement.scrollTop;
      const fullSize: number = document.documentElement.offsetHeight;
      const sizeVP: number = document.documentElement.clientHeight;

      if (scroll > 100) {
        this.btnTop.nativeElement.classList.add("show");
      } else {
        this.btnTop.nativeElement.classList.remove("show");
      }

      // MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PAGINA
      if (fullSize === scroll + sizeVP) {
        this.btnTop.nativeElement.classList.add("scrollFinal");
      } else {
        this.btnTop.nativeElement.classList.remove("scrollFinal");
      }
    });

    // DETECTAMOS EVENTO CLICK EN EL BOTON
    this.btnTop.nativeElement.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }

}

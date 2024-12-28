import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-bnt-top',
  templateUrl: './bnt-top.component.html',
  styleUrls: ['./bnt-top.component.css']
})
export class BntTopComponent {
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const btnTop = document.getElementById("btn-top");
    if (btnTop) {
      if (window.pageYOffset > 100) { //si el scroll bajo a 100
        btnTop.classList.add("show");
      } else {
        btnTop.classList.remove("show");
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); //behavio es animaciones (opcional)
  }

}

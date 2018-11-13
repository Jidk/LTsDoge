import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LTsDoge';

  ngOnInit(): void {

    window.onload = () => {
      this.test(document.body);
    };
  }

  test(e: any) {
    if (e.hasChildNodes()) {
      Array.from(e.childNodes).forEach((cn) => {
        this.test(cn);
        //console.log(cn);
      });
      //console.log(e);
    } else {
      if (e.nodeName === "#text") {
        console.log(e.parentNode);
        var a = document.createElement('a');
        var t = document.createTextNode('test');
        a.appendChild(t);
        e.parentNode.appendChild(a);
        e.remove();

      }

      /*Array.from(e).forEach((ee) => {
        console.log(ee);
      });*/
    }
  }
}

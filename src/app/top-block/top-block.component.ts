import { Component, OnInit } from '@angular/core';
import { translate } from 'src/assets/ts/GCP-Translation';

@Component({
  selector: 'app-top-block',
  templateUrl: './top-block.component.html',
  styleUrls: ['./top-block.component.scss']
})
export class TopBlockComponent implements OnInit {
  private ul: Element;
  private timeout: any;
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', (e) => {
      this.getScrollTop();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.getScrollTop2();
      }, 100);
    });

    this.ul = document.querySelector("#menu");
    Array.from(this.ul.children).forEach((li) => {
      let _li = li;
      _li.addEventListener("click", () => {
        Array.from(this.ul.children).forEach((li) => {
          li.classList.remove("onclick");
        });
        _li.classList.add("onclick");
      })
    });

    document.querySelector("#li-count").innerHTML = this.ul.childElementCount.toString();

    let t = new translate();
    t.dotest();

  }

  getScrollTop() {
    var bodyTop = 0;
    if (typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
    } else if (typeof document.compatMode != "undefined"
      && document.compatMode != "BackCompat") {
      bodyTop = document.documentElement.scrollTop;
    } else if (typeof document.body != "undefined") {
      bodyTop = document.body.scrollTop;
    }
    /*顯示出捲動後的高度值*/
    document.getElementById("jsScrollTop").innerHTML = bodyTop.toString();
    if (bodyTop > 0) {
      document.querySelector("#main-topbar").classList.add("scroll");
    } else {
      document.querySelector("#main-topbar").classList.remove("scroll");
    }
  };

  getScrollTop2() {
    var bodyTop = 0;
    if (typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
    } else if (typeof document.compatMode != "undefined"
      && document.compatMode != "BackCompat") {
      bodyTop = document.documentElement.scrollTop;
    } else if (typeof document.body != "undefined") {
      bodyTop = document.body.scrollTop;
    }
    /*顯示出捲動後的高度值*/
    document.getElementById("jsScrollTop2").innerHTML = bodyTop.toString();
    if (bodyTop > 0) {
      document.querySelector("#main-topbar").classList.add("scroll");
    } else {
      document.querySelector("#main-topbar").classList.remove("scroll");
    }
  }
}

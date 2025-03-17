import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderComponent } from './basic/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // var tooltipTriList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // tooltipTriList.map( tooltipTri=>{
    //   return new Tooltip(tooltipTri);
    // })
  }
  title = 'gui';
}

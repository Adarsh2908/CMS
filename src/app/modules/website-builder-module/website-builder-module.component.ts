import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ContentChild, ElementRef, Inject, OnInit, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-website-builder-module',
  templateUrl: './website-builder-module.component.html',
  styleUrls: ['./website-builder-module.component.css']
})
export class WebsiteBuilderModuleComponent implements AfterViewInit {

  @ViewChild('widgetBox', { static: true }) wBox!: ElementRef;
  public widgetBox!: HTMLElement;


  ngAfterViewInit(): void {
    this.widgetBox = this.wBox.nativeElement;
    this.widgetBox.addEventListener('mousedown', () => {
      this.widgetBox.addEventListener('mousemove', this.boxMove);
    });

    this.widgetBox.addEventListener('mouseup', () => {
      this.widgetBox.removeEventListener('mousemove', this.boxMove);
    });

  }

  boxMove = ({ movementX, movementY }: any) => {
    let currStyles = window.getComputedStyle(this.widgetBox);
    let left = parseInt(currStyles.left);
    let top = parseInt(currStyles.top);

    this.widgetBox.style.left = `${left + movementX}px`;
    this.widgetBox.style.top = `${top + movementY}px`;
  }
}


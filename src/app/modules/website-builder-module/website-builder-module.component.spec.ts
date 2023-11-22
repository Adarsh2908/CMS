import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBuilderModuleComponent } from './website-builder-module.component';

describe('WebsiteBuilderModuleComponent', () => {
  let component: WebsiteBuilderModuleComponent;
  let fixture: ComponentFixture<WebsiteBuilderModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteBuilderModuleComponent]
    });
    fixture = TestBed.createComponent(WebsiteBuilderModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

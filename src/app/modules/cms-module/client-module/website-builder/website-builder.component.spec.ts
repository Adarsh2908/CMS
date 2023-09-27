import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBuilderComponent } from './website-builder.component';

describe('WebsiteBuilderComponent', () => {
  let component: WebsiteBuilderComponent;
  let fixture: ComponentFixture<WebsiteBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteBuilderComponent]
    });
    fixture = TestBed.createComponent(WebsiteBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

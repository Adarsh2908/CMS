import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsModuleComponent } from './cms-module.component';

describe('CmsModuleComponent', () => {
  let component: CmsModuleComponent;
  let fixture: ComponentFixture<CmsModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmsModuleComponent]
    });
    fixture = TestBed.createComponent(CmsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsManageComponent } from './cms-manage.component';

describe('CmsManageComponent', () => {
  let component: CmsManageComponent;
  let fixture: ComponentFixture<CmsManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmsManageComponent]
    });
    fixture = TestBed.createComponent(CmsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersClientComponent } from './users-client.component';

describe('UsersClientComponent', () => {
  let component: UsersClientComponent;
  let fixture: ComponentFixture<UsersClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersClientComponent]
    });
    fixture = TestBed.createComponent(UsersClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

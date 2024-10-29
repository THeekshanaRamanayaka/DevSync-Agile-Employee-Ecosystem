import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarComponentComponent } from './user-avatar-component.component';

describe('UserAvatarComponentComponent', () => {
  let component: UserAvatarComponentComponent;
  let fixture: ComponentFixture<UserAvatarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAvatarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAvatarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

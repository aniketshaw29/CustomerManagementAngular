import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayByEmailComponent } from './display-by-email.component';

describe('DisplayByEmailComponent', () => {
  let component: DisplayByEmailComponent;
  let fixture: ComponentFixture<DisplayByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayByEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

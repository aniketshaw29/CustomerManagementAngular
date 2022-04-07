import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdDeleteComponent } from './get-id-delete.component';

describe('GetIdDeleteComponent', () => {
  let component: GetIdDeleteComponent;
  let fixture: ComponentFixture<GetIdDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIdDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdUpdateComponent } from './get-id-update.component';

describe('GetIdUpdateComponent', () => {
  let component: GetIdUpdateComponent;
  let fixture: ComponentFixture<GetIdUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIdUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

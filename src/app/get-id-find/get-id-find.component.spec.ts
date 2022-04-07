import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdFindComponent } from './get-id-find.component';

describe('GetIdFindComponent', () => {
  let component: GetIdFindComponent;
  let fixture: ComponentFixture<GetIdFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIdFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

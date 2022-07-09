import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageImageCardComponent } from './manage-image-card.component';

describe('ManageImageCardComponent', () => {
  let component: ManageImageCardComponent;
  let fixture: ComponentFixture<ManageImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageImageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

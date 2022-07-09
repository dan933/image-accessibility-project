import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageImagesPageComponent } from './manage-images-page.component';

describe('ManageImagesPageComponent', () => {
  let component: ManageImagesPageComponent;
  let fixture: ComponentFixture<ManageImagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageImagesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageImagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabFormComponent } from './add-lab-form.component';

describe('AddLabFormComponent', () => {
  let component: AddLabFormComponent;
  let fixture: ComponentFixture<AddLabFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLabFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

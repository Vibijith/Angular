import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDistricPageComponent } from './single-distric-page.component';

describe('SingleDistricPageComponent', () => {
  let component: SingleDistricPageComponent;
  let fixture: ComponentFixture<SingleDistricPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDistricPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDistricPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

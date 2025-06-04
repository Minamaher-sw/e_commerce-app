import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincomponent } from './maincomponent';

describe('Maincomponent', () => {
  let component: Maincomponent;
  let fixture: ComponentFixture<Maincomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maincomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maincomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

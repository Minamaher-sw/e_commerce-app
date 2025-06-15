import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenSignup } from './template-driven-signup';

describe('TemplateDrivenSignup', () => {
  let component: TemplateDrivenSignup;
  let fixture: ComponentFixture<TemplateDrivenSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

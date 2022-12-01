import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompteurComponent } from './compteur.component';

describe('CompteurComponent', () => {
  let component: CompteurComponent;
  let fixture: ComponentFixture<CompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check count is 0', () => {
    const spanCount: HTMLSpanElement = fixture.nativeElement.querySelector('[data-testId="compteur"]')
    expect(spanCount.innerHTML).toBe('0');
  })

  it('increase value', () => {
    const buttonIncrement = fixture.nativeElement.querySelector('[data-testId="increment"]')
    buttonIncrement.click();

    const spanCount: HTMLSpanElement = fixture.nativeElement.querySelector('[data-testId="compteur"]')
    expect(spanCount.innerHTML).toBe('1');
  })

  it('decrease value', () => {
    const buttonIncrement = fixture.nativeElement.querySelector('[data-testId="increment"]')
    buttonIncrement.click();

    const spanCount: HTMLSpanElement = fixture.nativeElement.querySelector('[data-testId="compteur"]')
    expect(spanCount.innerHTML).toBe('-1');
  })
});
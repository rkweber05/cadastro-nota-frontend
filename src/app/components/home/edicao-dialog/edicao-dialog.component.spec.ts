import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoDialogComponent } from './edicao-dialog.component';

describe('EdicaoDialogComponent', () => {
  let component: EdicaoDialogComponent;
  let fixture: ComponentFixture<EdicaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdicaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDialogComponent } from './detalhe-dialog.component';

describe('DetalheDialogComponent', () => {
  let component: DetalheDialogComponent;
  let fixture: ComponentFixture<DetalheDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

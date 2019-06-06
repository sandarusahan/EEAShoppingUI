import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersItemsComponent } from './view-orders-items.component';

describe('ViewOrdersItemsComponent', () => {
  let component: ViewOrdersItemsComponent;
  let fixture: ComponentFixture<ViewOrdersItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrdersItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

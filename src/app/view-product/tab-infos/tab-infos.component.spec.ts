import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfosComponent } from './tab-infos.component';

describe('TabInfosComponent', () => {
  let component: TabInfosComponent;
  let fixture: ComponentFixture<TabInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

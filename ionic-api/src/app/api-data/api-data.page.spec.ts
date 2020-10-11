import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiDataPage } from './api-data.page';

describe('ApiDataPage', () => {
  let component: ApiDataPage;
  let fixture: ComponentFixture<ApiDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

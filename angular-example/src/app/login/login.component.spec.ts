import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.get(AuthService);
    spyOn(authService, 'login').and.returnValue(true);

    component.loginForm.controls['userName'].setValue('admin');
    component.loginForm.controls['password'].setValue('admin');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.login when calling login method', () => {
    component.login();
    expect(authService.login).toHaveBeenCalled();
  });
});

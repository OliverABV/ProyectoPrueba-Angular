import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  isLogin = false;

  constructor(
    private userService: ServiceService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private autorizacionService: AutorizacionService
  ) {}

  ngOnInit() {
  }

  setUser(){
    console.log('user', this.user);
  }

  getUser(){
    this.userService.getUser().subscribe(
      (data) =>{
        console.log('data',data);

        if(data.find(n => n.name === this.user.name && n.pws == this.user.pws)){
          this.isLogin = true;
        }else{
          this.isLogin = false;
        }
        console.log('isLogin: ', this.isLogin);
      },
      (error) =>{
        console.log('error', error);
      });
  }

  onSubmit(){
    this.autorizacionService.login(this.user.username, this.user.pws).pipe(first()).subscribe(
      (data) =>{
        if(data){
          localStorage.setItem('Username', data.name + ' ' + data.lastname);
        }
        this.router.navigate(['../homeUser'], {relativeTo: this.activatedRouter });
      },
      error =>{
        console.log('error', error);
      });
  }
}

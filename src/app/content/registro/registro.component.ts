import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User } from 'src/app/model/user';
import { Country } from 'src/app/model/country';
import { ServiceService } from 'src/app/services/service.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formG: FormGroup;
  user: User = new User();
  countryList: Country[];
  

  constructor(
    private formB: FormBuilder,
    private userService : ServiceService,
    private countryService: CountryService) { }

  ngOnInit() {

    this.buildForm();
    this.getCountry();

  }

  buildForm(){

    this.formG = this.formB.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      username: [null, Validators.required],
      pws: [null, Validators.required],
      country: null

    });
  }

  saveUser(){

    this.user.name = this.formG.get('name').value;
    this.user.lastname =  this.formG.get('lastname').value;
    this.user.username = this.formG.get('username').value;
    this.user.pws = this.formG.get('pws').value;
    this.user.countryId = this.formG.get('country').value;

    this.userService.save(this.user).subscribe(
      (data) =>{
        console.log('Se ha guardado usuario', data);
        alert('Usuario guardado con éxito');
      },
      (error) =>{
        console.log('Error al guardar usuario', error);
      });
  }

  getCountry(){
    this.countryService.getAll().subscribe(
      (data) =>{
        this.countryList = data;
        console.log('Todo Bien', data);
      },
      (error) =>{
        console.log('Error get country', error);
      }
    );
  }
}

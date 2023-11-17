import { Component, OnInit} from '@angular/core';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  name:string = "Java";
  abrev:string = "jv";
  data:any = [];

  dataUsers: any = [];
  dataLanguages: any = [];

  constructor(private language: LenguajesService){}

  ngOnInit()
  {
    this.language.getListLanguges().subscribe( (data) => {
      console.log(data)
    } )
  }

  save()
  {
    var body = 
    {
      name: this.name,
      abrev: this.abrev
    }
    this.language.postLanguage(body).subscribe( (data) => {
      console.log(data)   
    })
  } 
}

import { Component, OnInit} from '@angular/core';
import { LenguajesService } from 'src/app/services/lenguajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  name:string = "";
  abrev:string = "";
  dataSource:any = [];
  isEditing = false;
  editRow: any = null;

  constructor(private language: LenguajesService){}

  ngOnInit()
  {
    this.language.getListLanguges().subscribe( (data) => {
      for(var key in data){
        var row = {id:key, abrev: data[key].abrev, name: data[key].name}
        this.dataSource.push(row)
      }
      console.log(this.dataSource)
    })
  }

  save()
  {
    let body = {
      name: this.name,
      abrev: this.abrev
    }
    this.language.postLanguage(body).subscribe( (data) => {
      if(data!=null)
      {
        window.location.reload();
      }
    });
  }

  loadLanguages() {
    this.language.getListLanguges().subscribe((data) => {
        this.dataSource = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    });
  }

borrar(id:string){
  let aux = confirm("Esta Seguro de Borrar")
  if(!aux) return
    this.language.deleteLanguage(id).subscribe( (data) => {
      if(data==null)
      {
        window.location.reload();
      }
    });
  }

  actualizar(id: string) {
    let aux = confirm("Esta Seguro de Actualizar");
    if (!aux) return;
    this.isEditing = true;
    this.editRow = { ...this.dataSource.find((item: { id: string; }) => item.id === id) };
  }

  guardar() {
    this.language.updateLanguage(this.editRow.id, this.editRow).subscribe(() => {
      this.loadLanguages();
      this.isEditing = false;
      this.editRow = null;
    });
  }
}

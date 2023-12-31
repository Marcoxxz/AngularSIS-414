import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user:any = null;
  
  constructor(private auth:AuthService, private router:Router){
  }

  ngOnInit(){
    this.user = this.auth.getuser()?.displayName;
    if(this.user == null){
      this.user = this.auth.getuser()?.email; 
    }
  }  

  salir(){
    this.auth.logout().then(res=>{
      this.router.navigate(["/"]);
    }).catch(error=>{
      console.log(error)
    })
  }
}

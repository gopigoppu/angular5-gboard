import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  login(formFields) {
    console.log(formFields);
  }

  ngOnInit() {
    // this.apiService.getUsers().subscribe((data: any) => {
    //   console.log(data);
    // });
  }

}

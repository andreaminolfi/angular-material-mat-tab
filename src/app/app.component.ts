import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  users: User[];

  constructor(private http: HttpClient) {
    http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => (this.users = res));
  }
}

import { Component, OnInit } from '@angular/core';
import { SWReponse, User } from 'src/app/pages/users/user/user.interface';
import { UserService } from './user.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns!: string[];
  dataSource!: User[];


  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.displayedColumns = ['id', 'email', 'actions'];

    this.userService.getUsers()
      .pipe(
        tap((users: SWReponse) => this.dataSource = users.data.items)
      )
      .subscribe();
  }

  clickMethod(name: string, id: string) {
    if (confirm("¿Seguro que quieres borrar el registro " + name + " ?")) {
      this.userService.delete(id)
      .subscribe(
          () => this.dataSource = this.dataSource.filter(x => x.id !== Number(id))
      );
    }
  }
}

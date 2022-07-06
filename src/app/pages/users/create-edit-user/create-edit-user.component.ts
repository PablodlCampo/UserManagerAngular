import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { SingleReponse, User } from '../user/user.interface';
import { UserPost, UserUpdate } from '../user/user-post.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.css']
})
export class CreateEditUserComponent implements OnInit {
  public data = [];

  user!: User;
  postUser!: UserPost;
  userId !: string;
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.form = this.formBuilder.group({
      email: [''],
      id: [{ value: '', disabled: true }],
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') ?? "";

    if (Number(this.userId) != 0) {
      this.userService.getSingleUser(Number(this.userId))
        .subscribe(
          (data: SingleReponse) => {
            this.user = {
              id: data.data.id,
              email: data.data.email,
            };

            this.form.patchValue
              ({
                email: this.user.email,
                id: this.user.id,
              })
          });
    }
  }

  onSubmit() {
    if (this.form.controls['id'].value) {

      let userUpdate: UserUpdate = {
        email: this.form.controls['email'].value,
      };

      this.userService.update(this.form.controls['id'].value, userUpdate)
      .subscribe(
        () => this.goBack()
      );

    }
    else {
      let postUser: UserPost = {
        email: this.form.controls['email'].value,
        passtoken: 'passPrueba123'
      };

      this.userService.create(postUser)
      .subscribe(
        () => this.goBack()
      );
    }
  }

  goBack() {
    this.router.navigate(['/users']);
  }

}

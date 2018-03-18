import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Constant } from '../app/shared/constant';

import{
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { SinglePostComponent } from './post/single-post/single-post.component';
import { CreateUpdatePostComponent } from './post/create-update-post/create-update-post.component';

const route: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UserlistComponent},
  { path: 'userprofile/:id', component: UserprofileComponent},
  { path: 'posts', component: PostlistComponent},
  { path: 'posts/:id', component: SinglePostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserlistComponent,
    UserprofileComponent,
    PostlistComponent,
    SinglePostComponent,
    CreateUpdatePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  providers: [ UserService, Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }

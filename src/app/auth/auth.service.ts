import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { FormGroup } from '@angular/forms';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async login(form: FormGroup) {
    try {
        await this.afAuth.auth.signInWithEmailAndPassword(form.get('email').value, form.get('password').value);
        this.router.navigate(['closet/list']);
    } catch (e) {
        alert("Error!"  +  e.message);
    }

    console.log(form.value);
  }

  async register(form: FormGroup) {
    var result;

    try {
      result = await this.afAuth.auth.createUserWithEmailAndPassword(form.get('email').value, form.get('password').value);
      this.router.navigate(['closet/list']);
    } catch (e) {
        alert("Error!"  +  e.message);
    }
  }

  async logout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
}

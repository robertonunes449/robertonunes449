import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from './user';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { from, Observable, of, throwError } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollerction: AngularFirestoreCollection<User> = this.afs.collection('users');

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth) { }

  register(user: User): Observable<boolean> {
    return from (this.afAuth.auth
      .createUserWithEmailAndPassword(user.email, user.password))
      .pipe(
        switchMap((u: firebase.auth.UserCredential) => 
        this.userCollerction.doc(u.user.uid)
          .set({...user, ide: u.user.uid})
          .then(()=> true)
        ),
        catchError((err) => throwError(err))
      )
  }

  login(email: string, password: string): Observable<User> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
    .pipe(
      switchMap((u: firebase.auth.UserCredential)=> this.userCollerction.doc<User>(u.user.uid).valueChanges()),
      catchError(() => throwError('Invalid Credencial or Users is not Registered.'))
    )
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getUser(): Observable<User> {
    return this.afAuth.authState
      .pipe(
        switchMap((u) => (u) ? 
          this.userCollerction.doc<User>(u.uid).valueChanges() : of(null))
      )
  }

  authenticated(): Observable<boolean> {
    return this.afAuth.authState
      .pipe(map((u) => (u) ? true : false))
  }

  async updateUserDate(u: auth.UserCredential) {
    try {
      const newUser: User= {
        firstname: u.user.displayName,
        lastname: '',
        address: '',
        city: '',
        state: '',
        phone: '',
        mobilephone: '',
        email: u.user.email,
        password: '',
        id: u.user.uid
      };
      await this.userCollerction.doc(u.user.uid).set(newUser);
      return newUser;
    }
    catch(e) {
      throw new Error(e);
    }
  }

  async loginWithGoogleAccount() {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        let Credencials: firebase.auth.UserCredential = await this.afAuth.auth.signInWithPopup(provider);
        let user: User = await this.updateUserDate(Credencials);
        return user;
    }
    catch(e) {
      throw new Error(e); 
    }
  }

  loginGoogle(): Observable<User> {
    return from(this.loginWithGoogleAccount());
  }

  oldLoginGoogle(): Observable<User> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return from(this.afAuth.auth.signInWithPopup(provider))
      .pipe(
          tap((data) => console.log(data)),
          switchMap((u: firebase.auth.UserCredential) => {
            const newUser: User= {
              firstname: u.user.displayName,
              lastname: '',
              address: '',
              city: '',
              state: '',
              phone: '',
              mobilephone: '',
              email: u.user.email,
              password: '',
              id: u.user.uid
            };
            return this.userCollerction.doc(u.user.uid)
              .set(newUser).then(() => newUser);
          })
      );
  }
}

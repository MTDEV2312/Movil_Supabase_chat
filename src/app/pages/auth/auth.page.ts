import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonItem,IonInput,IonButton } from '@ionic/angular/standalone';
import {supabase} from 'src/app/supabase.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList,IonItem,IonInput,IonButton]
})
export class AuthPage {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router:Router) { }

  async login (){
    const {error} = await supabase.auth.signInWithPassword({
      email: this.email,
      password: this.password
    });
    if (error) {
      this.error = error.message;
    } else {
      this.router.navigate(['/chat']);
    }
  }

  async register(){
    const {error} = await supabase.auth.signUp({
      email: this.email,
      password: this.password
    });
    if (error) {
      this.error = error.message;
    } else {
      alert('Registration successful! Please check your email to confirm your account.');
    }
  }


}

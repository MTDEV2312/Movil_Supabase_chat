import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonFooter, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { supabase } from 'src/app/supabase.client';
import { Message, SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonInput, IonFooter, IonButton, IonButtons, IonIcon]
})
export class ChatPage implements OnInit {

  messages: Message[] = [];
  newMessage: string = '';
  email: string = '';


  constructor(private router: Router,private supabaseService: SupabaseService) { }

  async ngOnInit() {
    const{data,error} = await supabase.auth.getUser();
    if (error || !data.user) {
      this.router.navigate(['/auth']);
    }else {
      this.email = data.user.email || '';
    }
    this.messages = await this.supabaseService.getMessages();

    this.supabaseService.subscribeToNewMessages((message) => {
      this.messages.push(message);
    });
  }


  async sendMessage() {
    if (this.newMessage.trim() === '') return;

    await this.supabaseService.sendMenssage(this.newMessage);
    this.newMessage = '';
  }


  async logout () {
    const { error } = await supabase.auth.signOut();
    if (error) {
    } else {
      this.router.navigate(['/auth']);
    }
  }
}

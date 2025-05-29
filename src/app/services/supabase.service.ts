import { Injectable } from '@angular/core';
import { supabase } from '../supabase.client';
import { Router } from '@angular/router';

export interface Message {
  id: string;
  content: string;
  user_id: string;
  user_email: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor(private router: Router) {
  }

  async getMessages(): Promise<Message[]> {
    const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: true });
    if (error) {
      console.error('Error al obtener mensajes:', error);
      return [];
    }
    return data as Message[] || [];
  }

  async sendMenssage(content: string): Promise<void> {
    const { data: { user }, error: authError } = await supabase.auth.getUser(); // Obtiene el usuario actual

    if (authError || !user) {
      console.error('User not authenticated or error fetching user:', authError);
      this.router.navigate(['/auth']);
      throw new Error('User not authenticated');
    }

    if (!user.email) { // Verifica que el email del usuario esté disponible
      console.error('User email is not available.');
      throw new Error('User email is not available.');
    }

    const { error: insertError } = await supabase.from('messages').insert({
      content,
      user_id: user.id,
      user_email: user.email // Aquí se incluye el email del usuario autenticado
    });

    if (insertError) {
      console.error('Error sending message:', insertError);
      throw new Error('Error sending message: ' + insertError.message);
    }
  }

  subscribeToNewMessages(callback: (message: Message) => void): void {
    supabase
      .channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          callback(payload.new as Message);
        }
      )
      .subscribe();
  }
}

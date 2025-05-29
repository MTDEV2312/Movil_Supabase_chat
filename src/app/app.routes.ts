import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.page').then((m) => m.ChatPage),
  }
];

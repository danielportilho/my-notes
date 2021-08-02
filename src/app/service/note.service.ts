import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { LocalStorageService } from './local-storage.service';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  note: Note;
  user: User;
  noteId: number;

  constructor(
    public localStorageService: LocalStorageService,
    public router: Router
    ) { }

  getNote(user: User, id: number) {
    return user.notes.find(note => note.id === id);
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

  deleteNote(user: User, id: number) {
    user.notes = user.notes.filter(note => note.id !== id);
    this.localStorageService.set('user', user);
  }

  // new | edit
  saveNote(action: any, form: FormGroup) {

    const controls = form.controls;
    this.user = this.localStorageService.get('user');

    if (action === 'new') {

      let note = new Note();
      let date = new Date();

      note.id = Date.now();
      note.title = controls.title.value;
      note.description = controls.description.value;
      note.dateCreate = date;

      this.user.notes.push(note);
    } else {
      const id = action;

      this.user.notes.forEach((note) => {
        if (note.id === id) {
          note.title = controls['title'].value;
          note.description = controls['description'].value;
        }
      });
    }
    this.updateStorage(this.user);
    this.router.navigate(['..']);
  }

  cancel() {
    this.router.navigate(['..']);
  }

  updateStorage(user: User) {
    this.localStorageService.set('user', user)
  }
}

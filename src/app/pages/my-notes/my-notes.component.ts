import { Component, OnInit } from '@angular/core';

import { NoteService } from './../../service/note.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { User } from './../../models/user.model';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.scss']
})
export class MyNotesComponent implements OnInit {

  search: string;
  user: User;
  noteModal: Note;
  showModal = false;

  constructor(
    public localStorageService: LocalStorageService,
    public noteService: NoteService
    ) {
    this.user = this.localStorageService.get('user');
  }

  ngOnInit() {
    console.log(this.showModal);
  }

  openNote(id: number) {
    this.showModal = true;
    this.noteModal = this.user.notes.find(note => note.id === id);
    console.log(this.showModal);
  }

  closeModal() {
    this.showModal = false;
  }
}

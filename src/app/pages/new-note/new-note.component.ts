import { NoteService } from './../../service/note.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { User } from './../../models/user.model';
import { Tag } from './../../models/tag.model';
import { Note } from './../../models/note.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  user = new User();
  note = new Note();
  newNoteForm: FormGroup;
  tags: Tag[] = [];
  tag: Tag;

  constructor(
    public localStorageService: LocalStorageService,
    private fb: FormBuilder,
    public noteService: NoteService) {

    this.newNoteForm = this.fb.group({
      title: [''],
      description: [''],
      tag: ['']
    });
  }

  ngOnInit(): void {
  }
}

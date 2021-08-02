import { NoteService } from './../../service/note.service';
import { Note } from './../../models/note.model';
import { LocalStorageService } from './../../service/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  user: User;
  note: Note;
  noteId: number;
  editNoteForm: FormGroup;

  constructor(
    public noteService: NoteService,
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    public localStorageService: LocalStorageService,
    public router: Router) {

    this.user = localStorageService.get('user');
  }

  ngOnInit(): void {
    this.noteId = Number(this.route.snapshot.params.id);
    this.note = this.noteService.getNote(this.user, this.noteId)
    
    this.editNoteForm = this.fb.group({
      title: [this.note.title],
      description: [this.note.description]
    });
  }
}

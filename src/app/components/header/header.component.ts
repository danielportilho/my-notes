import { NoteService } from './../../service/note.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string;

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
  }

}

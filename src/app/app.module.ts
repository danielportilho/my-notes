import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewNoteComponent } from './pages/new-note/new-note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { MyNotesComponent } from './pages/my-notes/my-notes.component';
import { SearchPipe } from './pipes/search.pipe';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNotesComponent,
    NewNoteComponent,
    EditNoteComponent,
    SearchPipe,
    HeaderComponent,
    ButtonComponent,
    InputComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

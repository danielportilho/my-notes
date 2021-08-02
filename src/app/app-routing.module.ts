import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewNoteComponent } from './pages/new-note/new-note.component';
import { MyNotesComponent } from './pages/my-notes/my-notes.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-notes',
    pathMatch: 'full'
  },
  {
    path: 'my-notes',
    component: MyNotesComponent,
  },
  {
    path: 'new-note',
    component: NewNoteComponent,
  },
  {
    path: 'my-notes/:id',
    component: EditNoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { MarkdownModule } from 'ngx-markdown';
import { FinalScoreComponent } from './final-score/final-score.component';

const routes: Routes = [
  { path: "final-score", component: FinalScoreComponent },
  { path: 'question/:id/answer', component: AnswerComponent},
  { path: 'question/:id', component: QuestionComponent}, 
  { path: '', component: WelcomeComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    AnswerComponent,
    FinalScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

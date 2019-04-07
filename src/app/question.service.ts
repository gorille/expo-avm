import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[] = [
    {
      question: "Quel est le fruit du chêne (53)?",
      answerId: 53,
      answerText: "Il s'agit du **gland** à ne pas confondre avec la variété poussant dans les bureaux !!"
    },
    {
      question: "Qu'est ce qui fait 999 fois *plic* et une fois *ploc* (26)?",
      answerId: 26,
      answerText: "Un mille pattes avec une jambe de bois",
      answerImage: "https://download.vikidia.org/vikidia/fr/images/thumb/9/94/Scolopendre.jpg/200px-Scolopendre.jpg"
    }
  ]

  private score = 0

  constructor() { }

  getQuestion(id: number): Question {
    return this.questions[id - 1]
  }

  incrementScore() {
    this.score += 1
  }

  getScore(): {score: number, total: number} {
    return {score: this.score, total: this.questions.length}
  }
}

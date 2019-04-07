import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question
  id: number
  answer: number
  error = false

  constructor(private questionService: QuestionService,
              private route: ActivatedRoute,
              private router: Router,
    ) { }

  ngOnInit() {
    this.id = + this.route.snapshot.params.id
    this.question = this.questionService.getQuestion(this.id)
  }

  validateAnswer() {
    if (this.answer === this.question.answerId) {
      this.questionService.incrementScore()
      this.skip()
    } else {
      this.error = true
    }
  }

  skip() {
    this.router.navigate(['question', this.id + '', 'answer'])
  }

}

import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  question: Question
  id: number

  score: {score: number, total: number}

  constructor(private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.id = + this.route.snapshot.params.id
    this.question = this.questionService.getQuestion(this.id)
    this.score = this.questionService.getScore()
  }

  next() {
    console.log(this.id, this.score.total);
    
    if (this.id === this.score.total ) {
      this.router.navigate(['final-score'])
    } else {
      this.router.navigate(['question', this.id + 1])
    }
    
  }

}

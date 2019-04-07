import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.component.html',
  styleUrls: ['./final-score.component.css']
})
export class FinalScoreComponent implements OnInit {
  score: {score: number, total: number}

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.score = this.questionService.getScore()
  }

}

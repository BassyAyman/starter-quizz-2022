import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {variable} from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;

  private httpUrl : string = "https://raw.githubusercontent.com/NablaT/starter-quiz-two/master/mock-quiz.json";

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);


  constructor(private url: HttpClient) {
    this.getQuizzes();
  }

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  this.quizzes.push(quiz);
  this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz){
    const index: number = this.quizzes.indexOf(quiz);
    if (index !== -1){
      this.quizzes.splice(index,1);
    }
    this.quizzes$.next(this.quizzes);
  }

  getQuizzes(){
    this.url.get<Quiz[]>(this.httpUrl)
      .subscribe((quizH) => {
        quizH.forEach(quiz => {this.quizzes.push(quiz);})
      });
    this.quizzes$.next(this.quizzes);
  }
}

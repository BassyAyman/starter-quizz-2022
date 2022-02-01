import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',
     answers: [
         {
             value: 'Les tuches II',
             isCorrect: false,
         },
         {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
};

export const QUESTION_SPORT: Question = {
  label: 'Le basket de joue au pied',
  answers: [
    {
      value: 'Vrai',
      isCorrect: false,
    },
    {
      value: 'Faux',
      isCorrect: true,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: '( ͡°Ĺ̯ ͡° )', // What's happening if I change this value..?
        theme: 'Les Acteurs',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
        theme: 'Basket',
        questions: [QUESTION_SPORT],
    }
];

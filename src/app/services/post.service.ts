import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    return [
      {
        id: 1,
        title: "My first post",
        body: "Just testing this out!",
        votes: 1
      },
      {
        id: 2,
        title: "What's your favorite front-end framework?",
        body: "My favorite is Angular. What do you enjoy working with?",
        votes: 1
      },
      {
        id: 3,
        title: "ngOnInit is great",
        body: "This lifecycle method gets called automatically upon component initialization!",
        votes: 1
      },
    ];
  }
}
export class Post {
  id: number;
  title: string;
  body: string;
  votes: number;

  constructor() {
    this.id = 1;
    this.title = '';
    this.body = '';
    this.votes = 1;
  }
}
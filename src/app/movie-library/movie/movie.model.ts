export class Movie {
  public title: string;
  public rating: number
  public coverArt: string;
  public synopsis: string;



constructor (title: string, rating: number, coverArt: string, synopsis: string ){
  this.title = title;
  this.rating = rating;
  this.coverArt = coverArt;
  this.synopsis = synopsis;
}
}


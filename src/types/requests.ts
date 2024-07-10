export interface ICreatePost {
  title: string;
  views: number;
}

export interface IUpdatePost extends Partial<ICreatePost> {}

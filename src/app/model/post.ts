export class Post{
    constructor(
        public id: string,
        public image: string,
        public title: string,
        public content: string,
        public nameCreated: string,
        public date: Date,
        public status: string,

    ){}
}
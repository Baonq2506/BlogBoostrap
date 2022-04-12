import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const posts = [
            {id: 1,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 2,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 3,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 4,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 5,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 6,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 7,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 8,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 9,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 10,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 11,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 12,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 13,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 14,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 15,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 16,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 17,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 18,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 19,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
            {id: 20,image:'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg', title: "My name's Hero", content: 'Welcome to my blog',nameCreated:'Mr Alex',date:this.randomDate(new Date('2015/1/01'),new Date()),status:'Public'},
        ];
        return {posts};

    }
    constructor() { }

    randomDate(start :Date, end:Date):Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}

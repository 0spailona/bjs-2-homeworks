class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this._state = 100;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            newState = 0;

        } else if (newState > 100) {
            newState = 100;
        }
        this._state = newState;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}



class Student {
    constructor(name) {
        this.name = name;
                this.marks = {
                    "физика": [],
                    "химия": [],
                    "литература": [],
                    "информатика": []
                };
    }

    addMark(mark, subject) {
        if (mark > 5 || mark < 2) {
            return false;
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
        return true;
    }

    getAverageBySubject(subject){
        return this.marks[subject] ? this.marks[subject].reduce((sum, mark) => sum + mark / this.marks[subject].length, 0) : 0;
}

    getAverage(){
        let subjects = Object.keys(this.marks).filter(subject => this.marks[subject].length > 0);
return subjects.reduce((sum, subject) => sum + this.getAverageBySubject(subject) / subjects.length,0);
    }

}



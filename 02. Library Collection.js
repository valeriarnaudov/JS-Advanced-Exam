class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error("Not enough space in the collection.")
        } else {
            this.books.push({ bookName, bookAuthor, payed: false });
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }

    payBook(bookName) {
        let found = this.books.find(name => name.bookName == bookName);

        if (!found) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (found.payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        }

        found.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let found = this.books.find(name => name.bookName == bookName);

        if (!found) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (found.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let index = this.books.indexOf(found)
        this.books.splice(index, 1);

        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let result = [];
        let foundBooks = [];
        if (!bookAuthor) {
            let emptySlots = this.capacity - this.books.length;
            result.push(`The book collection has ${emptySlots} empty spots left.`)

            this.books.forEach(x => {
                let paid = '';
                if (x.payed == true) {
                    paid = 'Has Paid';
                } else {
                    paid = 'Not Paid';
                }
                foundBooks.push(`${x.bookName} == ${x.bookAuthor} - ${paid}.`);
            });

            foundBooks.sort((a, b) => a.localeCompare(b)).forEach(x => result.push(x));
            return result.join('\n');
        }

        let found = this.books.find(author => author.bookAuthor == bookAuthor);

        if (!found) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }
        let paid = '';
        if (found.payed == true) {
            paid = 'Has Paid';
        } else {
            paid = 'Not Paid';
        }
        return `${found.bookName} == ${found.bookAuthor} - ${paid}.`;

    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


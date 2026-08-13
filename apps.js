const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        availability: true
    },
    {
        title: "1984",
        author: "George Orwell",
        category: "Fiction",
        availability: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        availability: false
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        availability: true
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        category: "Fantasy",
        availability: true
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        availability: false
    },
    {
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        category: "Science",
        availability: true
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Technology",
        availability: true
    },
    {
        title: "The Pragmatic Programmer",
        author: "David Thomas and Andrew Hunt",
        category: "Technology",
        availability: true
    },
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Technology",
        availability: false
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Romance",
        availability: true
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Adventure",
        availability: true
    }
];

const bookGrid = document.getElementById("book-grid");

function renderBooks() {
    if (books.length === 0) {
        bookGrid.innerHTML = "<p>No books available in the catalogue.</p>";
        return;
    }

    bookGrid.innerHTML = books.map(book => `
        <article class="book-card">
            <div class="book-card-content">
                <span class="book-category">${book.category}</span>
                <h2>${book.title}</h2>
                <p class="book-author">${book.author}</p>
                <p class="book-availability">
                    ${book.availability ? "Available" : "Unavailable"}
                </p>
            </div>
        </article>
    `).join("");
}

renderBooks();
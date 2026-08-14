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
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

function renderBooks(bookList) {
    if (bookList.length === 0) {
        bookGrid.innerHTML = "<p>No books found matching your search or category.</p>";
        return;
    }

    bookGrid.innerHTML = bookList.map(book => `
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

function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    const filteredBooks = books.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            book.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    renderBooks(filteredBooks);
}

searchInput.addEventListener("input", filterBooks);
categoryFilter.addEventListener("change", filterBooks);

renderBooks(books);
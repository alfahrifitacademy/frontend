import { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://127.0.0.1:5000/api/books", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        alert("Failed to fetch books!");
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded shadow-md border hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>Category: {book.category_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;

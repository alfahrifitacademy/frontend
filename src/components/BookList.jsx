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
        console.log("Full API Response:", data);
        console.log("Books to Set:", data.data.books);
        setBooks(data.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
        alert("Failed to fetch books!");
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-3xl text-black font-bold mb-6">Daftar Buku</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length > 0 ? (
          books.map((book, index) => {
            console.log(`Rendering book ${index + 1}:`, book);
            return (
              <div
                key={book.id || index}
                className="bg-customJonquil text-black p-6 rounded-lg shadow-lg border hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-bold mb-2">
                  {book.title || "No Title"}
                </h3>
                <p className="text-gray-700">
                  Author: {book.author || "Unknown"}
                </p>
                <p className="text-gray-700">Year: {book.year || "N/A"}</p>
                <p className="text-gray-700">
                  Category: {book.category_name || "Uncategorized"}
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-full">No books available.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;

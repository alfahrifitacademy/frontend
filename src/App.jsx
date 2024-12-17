import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import BookList from "./components/BookList";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="bg-gray-50 min-h-screen">
      {token ? (
        <>
          <Navbar />
          <BookList />
        </>
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
};

export default App;

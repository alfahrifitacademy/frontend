const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Book App</h1>
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

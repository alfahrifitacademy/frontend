const Navbar = () => {
  return (
    <nav className="bg-customTekhlet text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Bagian Logo dan Teks */}
        <div className="flex items-center space-x-3">
          <img
            src="/amikom.svg" // Path ke file logo di folder public
            alt="Amikom Logo"
            className="w-10 h-10 object-contain" // Ukuran logo
          />
          <h1 className="text-2xl font-bold">Amikom Booklist</h1>
        </div>

        {/* Tombol Logout */}
        <button
          className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100 transition"
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

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import img from "../assets/4391516.jpg";

function BookDetails() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const getBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://softwium.com/api/books/${id}`);
      const json = await res.json();
      setBooks(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <section className="w-full h-full flex justify-center items-center bg-slate-50">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full bg-white shadow-xl shadow-slate-300 rounded-lg overflow-hidden">
          <img src={img} alt="error" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 h-full bg-white shadow-xl shadow-slate-300 rounded-lg overflow-hidden mt-4 lg:mt-0 lg:ml-4">
          <div className="p-5 h-full flex flex-col justify-center">
            {!loading ? (
              <>
                <h1 className="font-bold text-xl mb-2">
                  Title:{" "}
                  <span className="text-lg font-semibold text-slate-500">
                    {books.title}
                  </span>
                </h1>
                <h2 className="font-bold text-xl mb-2">
                  ISBN:{" "}
                  <span className="text-lg font-semibold text-slate-500">
                    {books.isbn}
                  </span>
                </h2>
                <h3 className="font-bold text-xl mb-2">
                  Page Count:{" "}
                  <span className="text-lg font-semibold text-slate-500">
                    {books.pageCount}
                  </span>
                </h3>
                <h4 className="font-bold text-xl mb-2">
                  Authors:{" "}
                  <span className="text-lg font-semibold text-slate-500 italic">
                    {books.authors}
                  </span>
                </h4>
                <button
                  className="px-6 py-3 border rounded-3xl mt-10 font-semibold hover:bg-[#5956e9] hover:text-white transition duration-300"
                  onClick={() => navigate("/store")}
                >
                  Store
                </button>
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <RotatingLines width={32} color="#5956e9" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;

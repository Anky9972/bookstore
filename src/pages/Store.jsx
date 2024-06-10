import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import img from "../assets/bookicon.png";
import { useNavigate } from "react-router-dom";
import {RotatingLines} from 'react-loader-spinner'
function Store() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedBooks, setExpandedBooks] = useState({});
  const navigate = useNavigate();
  const getBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://softwium.com/api/books");
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

  const toggleShowMore = (bookId) => {
    setExpandedBooks((prev) => ({
      ...prev,
      [bookId]: !prev[bookId],
    }));
  };

  function handleClick(id){
    navigate(`/details/${id}`);
  }

  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-20 border-b flex justify-center items-center">
        <h1 className="text-4xl font-bold">Epic Reads Store</h1>
      </div>
      <div className="w-full h-full  p-5">
        {
            !loading && 
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 1200: 6 }}>
          <Masonry gutter="10px">
            {books.map((book) => (
              <div className="bg-[#dbdeff]  w-full rounded-3xl p-2 lg:p-4 xl:p-2 " key={book.id}>
                <div className="w-full flex justify-center items-center">
                  <div className="w-1/2 h-40 md:h-28 lg:h-36 xl:h-28 bg-[#5450db] rounded-full flex justify-center items-center">
                    <img src={img} alt="Book Icon" className="w-1/2" loading="lazy" />
                  </div>
                </div>
                <div className="w-full bg-white rounded-3xl flex flex-col justify-center items-start px-5 py-5 text-left mt-4 ">
                  <div className="flex gap-2">
                    <span className="text-sm font-bold">
                      {book.title.length > 20 ? `${book.title.substring(0, 20)}...` : book.title}
                    </span>
                  </div>
                  <div className="flex gap-2 justify-center items-center mt-2">
                    <h1 className="font-bold">Pagecount:</h1>
                    <span className="text-sm font-semibold text-slate-500">{book.pageCount}</span>
                  </div>
                  <div className="flex gap-2 justify-center items-center mt-2">
                    <h1 className="font-bold uppercase">ISBN:</h1>
                    <span className="text-sm font-semibold text-slate-500">{book.isbn}</span>
                  </div>
                  <div className="flex gap-2 justify-center items-center mt-2">
                    <h1 className="font-bold">Authors:</h1>
                    {book.authors.length > 1 ? (
                      <>
                        {expandedBooks[book.id] && (
                          <span className="text-sm font-semibold text-slate-500">{book.authors.join(", ")}</span>
                        )}
                        <span
                          className="text-xs text-[#e07589] font-semibold italic cursor-pointer"
                          onClick={() => toggleShowMore(book.id)}
                        >
                          {expandedBooks[book.id] ? "less" : "show more"}
                        </span>
                      </>
                    ) : (
                      <span className="text-sm font-semibold text-slate-500">{book.authors}</span>
                    )}
                  </div>
                  <div className="mt-2">
                    <button className="px-5 py-1 border border-[#5450db] rounded-full text-sm font-medium" onClick={()=>handleClick(book.id)}>View Book</button>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        }
        
        
      </div>
      {
            loading &&
            <div className="absolute z-10 w-full h-full flex justify-center items-center">
                <span>
                <RotatingLines width="32px"/>
                </span>
            </div>
        }
    </section>
  );
}

export default Store;

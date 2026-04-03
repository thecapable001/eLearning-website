
import React, { useState } from 'react'
import Navbar from '../Pages/Navbar'
import Onebook from './Onebook';
import Footer from '../Pages/Footer';
import data1 from "./data1";
import { GOOGLE_BOOKS_API_KEY } from "../../api/appConfig";

export default function ShowBook() {

  let [search, setSearch] = useState("");
  let [books, setbooks] = useState([]);

  const query = new URLSearchParams({
    q: search,
    maxResults: "40",
  });

  if (GOOGLE_BOOKS_API_KEY) {
    query.set("key", GOOGLE_BOOKS_API_KEY);
  }

  const url = `https://www.googleapis.com/books/v1/volumes?${query.toString()}`;

  // const url = `https://www.googleapis.com/books/v1/volumes?q=java&&key=${apikey}`;

  let getBooks = async () => {
    try {
      // console.log("search value under main func "+search);
      let result = await fetch(url);
      let resultjson = await result.json();
      console.log(resultjson);
      if(resultjson && resultjson.items){
        const filterBook = (resultjson.items.filter(newBook => newBook.saleInfo && newBook.saleInfo.saleability !== "NOT_FOR_SALE"));
        setbooks(filterBook);
      }
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    let searchValue = event.target.value;
    setSearch(searchValue);
    // console.log(searchValue);
  }

  let handleSubmit = (event) => {
    try {
      event.preventDefault();
      getBooks();
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />

      <section className="section-shell knowledge-page-shell">
        <div className="container showBook">
          <div className="section-heading section-heading-center">
            <span className="section-tag">Developer Knowledge Hub</span>
            <h1 className="section-title">Search technical books and revision references</h1>
            <p className="section-text">
              Use the search box to look for books, then browse suggested titles when you
              want a faster entry point into the knowledge hub.
            </p>
          </div>

          <div className="knowledge-search-shell d-flex justify-content-center">
            <form className="d-flex m-2" role="search" onSubmit={handleSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search books" onChange={handleChange} aria-label="Search books" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>

          <div>
            <div className="allbooks m-5 text-center wow fadeInUp">
              <h5 className="section-tag">Search results</h5>
              <div className="dataBooks row g-4 justify-content-center m-5 ">
                {books.map((item) => (
                  <Onebook key={item.id || item.etag} book={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="allbooks m-5 text-center wow fadeInUp">
            <h5 className="section-tag">Recommended books</h5>
            <div className="dataBooks row g-4 justify-content-center m-5 ">
              {data1.map((item) => (
                <Onebook key={item.id || item.etag} book={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

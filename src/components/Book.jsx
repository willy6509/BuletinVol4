import React from 'react';
import HTMLFlipBook from "react-pageflip";
import '../App.css'; // pastikan file ini aktif

function Book() {
  const bookData = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    image: `/images/${i + 1}.png`,
  }));

  return (
    <div className="book-wrapper-vertical">
      <div className="logo-center">
        <img src="/logo/logo_udinus.png" alt="Logo" className="dinus-logo" />
        <img src="/logo/logo_warta.png" alt="Logo" className="book-logo" />
        <img src="/logo/logo_sudut.png" alt="Logo" className="sudut-logo" />
      </div>

      {/* Flipbook */}
      <HTMLFlipBook
        width={420}
        height={595}
        showCover={true}
        singlePage={true}
        mobileScrollSupport={true}
      >
        {/* Cover depan */}
        <div className="page cover" key="cover-front">
          <div className="page-content">
            <img src={bookData[0].image} alt="Cover Depan" className="page-image" />
          </div>
        </div>

        {/* Halaman isi */}
        {bookData.slice(1, 59).map(book => (
          <div className="page" key={book.id}>
            <div className="page-content">
              <img src={book.image} alt={`Halaman ${book.id}`} className="page-image" />
            </div>
          </div>
        ))}

        {/* Cover belakang */}
        <div className="page cover" key="cover-back">
          <div className="page-content">
            <img src={bookData[59].image} alt="Cover Belakang" className="page-image" />
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Book;

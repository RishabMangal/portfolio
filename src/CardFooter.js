import React from "react";

function CardFooter() {
  return (
    <div className="container-fluid card-footerr">
      <a href="mailto:rishabhmangal1@gmail.com?subject=Awesome App">
        <i className="fas fa-envelope px-3 mr-auto"></i>
      </a>
      <a href="https://www.linkedin.com/in/rishab-m-00b60a103/">
        <i className="fab fa-linkedin px-3 mr-auto"></i>
      </a>
      <a href="https://api.whatsapp.com/send?phone=+919928799243&text=Hello">
        <i className="fab fa-whatsapp px-3 mr-auto"></i>
      </a>
      <a href="https://www.facebook.com/rishabh.mangal.77">
        <i className="fab fa-facebook-square px-3 mr-auto"></i>
      </a>
      <a href="https://www.instagram.com/rishabhmangal1/">
        <i className="fab fa-instagram px-3 mr-auto"></i>
      </a>
      <a href="https://github.com/RishabMangal">
        <i className="fab fa-github px-3 mr-auto"></i>
      </a>
      <a href="https://www.github.com">
        <i className="fab fa-google-plus px-3 mr-auto"></i>
      </a>
    </div>
  );
}

export default CardFooter;

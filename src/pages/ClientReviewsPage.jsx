import React from "react";
import { FiPlus, FiX } from "react-icons/fi";

function ClientReviewsPage() {
  const slides = [
    {
      title: "Car Rental Platform",
      content: "/clientimg.jpg",
      client: "Amna",
      review:
        "Their platform completely streamlined our booking process and improved customer satisfaction.",
    },
    {
      title: "Analytics Dashboard",
      content: "/clientimg.jpg",
      client: "Sarah Ali",
      review:
        "The dashboard gave us real-time insights that helped improve decision-making across teams.",
    },
    {
      title: "E-Commerce Solution",
      content: "/clientimg.jpg",
      client: "Eshal Maryum",
      review:
        "Sales increased significantly after launching the redesigned online shopping experience.",
    },
  ];

  return (
    <section className="client-reviews bg-blue-100">
      <h1 className="reviews-heading">What Our Client Says</h1>

      <div className="slider-wrapper">
        <div className="slider-track">
          {[...slides, ...slides].map((slide, index) => (
            <div className="slide-card group" key={index}>
              <div className="icon-wrapper">
                <FiPlus className="plus-icon" />
                <FiX className="x-icon" />
              </div>

              <img
                src={slide.content}
                alt={slide.title}
                className="slide-image"
              />

              <div className="hover-card">
                <h2>{slide.client}</h2>

                <p>{slide.review}</p>

                <div className="card-footer">
                  <span className="footer-left">CTO</span>

                  <span className="footer-right">Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientReviewsPage;

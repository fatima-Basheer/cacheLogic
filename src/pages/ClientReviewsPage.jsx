import React, { useRef } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

function ClientReviewsPage() {
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    const speed = 1;

    const animate = () => {
      x -= speed;

      const firstSlide = track.children[0];
      if (!firstSlide) return;

      const slideWidth = firstSlide.offsetWidth;

      const totalWidth = slideWidth * slides.length;

      if (Math.abs(x) >= totalWidth) {
        x = 0;
      }

      gsap.set(track, { x });

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <section className="client-reviews bg-blue-100 h-auto mx-auto py-10 md:py-15 lg:py-18">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="reviews-heading">What Our Client Says</h1>

        <div className="slider-wrapper overflow-hidden w-full relative">
          <div className="slider-track flex" ref={trackRef}>
            {[...slides, ...slides].map((slide, index) => (
              <div
                className="slide-card group flex-shrink-0 w-[300px] mx-3"
                key={index}
              >
                <div className="icon-wrapper">
                  <FiPlus className="plus-icon" />
                  <FiX className="x-icon" />
                </div>

                <img
                  src={slide.content}
                  alt={slide.title}
                  className="slide-image w-full h-[200px] object-cover"
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
      </div>
    </section>
  );
}

export default ClientReviewsPage;

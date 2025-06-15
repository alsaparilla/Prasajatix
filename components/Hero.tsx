"use client"; // Ensure it's a client-side component

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

// Image URLs for the slider in the public folder
const imageUrls = [
  "/DT-NH9X.webp",
  "/DT-TW21.webp",
  "/DTG-18N.webp",
  "/DTS-22N.webp",
  "/DTS-33N.webp",
];

export default function Hero() {
  const [imageHeight, setImageHeight] = useState<number>(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    arrows: true, // Show left and right arrows
    autoplay: true, // Automatically change images
    autoplaySpeed: 2000, // Change images every 3 seconds
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul style={{ padding: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          margin: "0 5px",
          borderRadius: "50%",
          background: "white", // Custom dot color (white)
        }}
      ></div>
    ),
    prevArrow: (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          zIndex: "1",
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        &lt;
      </div>
    ),
    nextArrow: (
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          zIndex: "1",
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        &gt;
      </div>
    ),
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.offsetHeight);
      }
    });
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative w-full"
      style={{
        paddingTop: "0", // Remove padding on top
        marginTop: "0", // Ensure no margin is added
        height: imageHeight ? `${imageHeight}px` : "auto", // Set height to image height
      }}
    >
      <Slider {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            ref={index === 0 ? imageRef : null} // Only track the first image
            style={{ width: "100%", height: "auto" }}
          >
            <Image
              src={imageUrl}
              alt={`Banner Image ${index}`}
              width={1920}
              height={1080}
              layout="responsive"
              objectFit="contain" // Ensures the entire image is visible
            />
          </div>
        ))}
      </Slider>

      {/* Mobile specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: ${imageHeight
              ? `${imageHeight}px`
              : "auto"}; /* Ensures the height matches the image height */
          }
        }
      `}</style>
    </section>
  );
}

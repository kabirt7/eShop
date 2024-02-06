import styles from "./HomePage.module.scss";
import { useState } from "react";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://media.fashionnetwork.com/m/2e3b/4153/4a14/3526/5e9a/26f5/3612/46d3/5ea7/0a29/0a29.jpeg",
    "https://ashadedviewonfashion.com/wp-content/uploads/2022/07/ashadedviewonfashion.com-rahul-mishra-hc-22-looking-to-trees-for-a-golden-inspiration-words-by-nafiseh-soolari-rahul-mishra-couture-fw22-look-28.jpg",
    "https://images.indulgexpress.com/uploads/user/ckeditor_images/article/2023/9/13/Rahul_Mishra_Designs-min.JPG",
  ];

  const isLastImage = currentIndex === images.length - 1;

  const handleMenuClick = (index) => {
    setCurrentIndex(index);
  };

  // const handleNextClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const handlePrevClick = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  return (
    <div className={styles.home__wrap}>
      <section className={styles.home}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={isLastImage ? styles.lastImage : ""}
        />
        <div className={styles.home__menu}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(index)}
              className={index === currentIndex ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

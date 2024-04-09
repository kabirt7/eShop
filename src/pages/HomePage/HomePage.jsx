import { CarouselComponent } from "../../components/CarouselComponent/CarouselComponent";
import img1 from "../../assets/img1.jpeg";
import img3 from "../../assets/HomePhoto.jpg";

const HomePage = () => {
  const images = [
    "https://media.fashionnetwork.com/m/2e3b/4153/4a14/3526/5e9a/26f5/3612/46d3/5ea7/0a29/0a29.jpeg",
    img1,
    img3,
  ];

  return (
    <>
      <CarouselComponent children={images} />
    </>
  );
};

export default HomePage;

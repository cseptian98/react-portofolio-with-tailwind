import Image from "next/image";
import img1 from "../../public/img1.jpeg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";
import img4 from "../../public/img4.png";
import img5 from "../../public/img5.jpg";
import img6 from "../../public/img6.jpg";

const listPhotos = [img1, img2, img3, img4, img5, img6];

export const PortfolioCard = () => {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      {listPhotos.map((photo, index) => {
        return (
          <div className="basis-1/3 flex-1" key={index}>
            <Image
              alt="web1"
              src={photo}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div>
        );
      })}
    </div>
  );
};

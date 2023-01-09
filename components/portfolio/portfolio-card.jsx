import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const listPhotos = [web1, web2, web3, web4, web5, web6];

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

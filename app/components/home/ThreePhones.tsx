import Image from "next/image";

interface Image {
  src: string;
}
const ThreePhones = ({ images }: { images: Image[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4 xl:gap-8">
      {images.map((image, i) => {
        const classes = `h-auto max-h-[500px] w-full object-contain ${
          i === 0 && "show-first-phone mt-[40px]"
        } ${i === 1 && "show-second-phone"} ${
          i === 2 && "show-third-phone mt-[80px]"
        }`;
        return (
          <Image
            key={image.src}
            className={classes}
            alt="A preview of the performance stats in my technical blog"
            title="A preview of the performance stats in my technical blog"
            src={image.src}
            width={250}
            height={500}
          />
        );
      })}
    </div>
  );
};

export default ThreePhones;

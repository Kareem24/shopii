type CardProps = {
  img: string;
  title: string;
  description: string;
};

const Card = ({ img, title, description }: CardProps) => {
  return (
    <div className="pr-11">
      <img src={img} alt={`${title} icon representation`} />
      <p className="mb-3 mt-6 text-base font-semibold text-shopii-black-800 ">
        {title}
      </p>
      <p className="text-base text-shopii-black-500 ">{description}</p>
    </div>
  );
};

export default Card;

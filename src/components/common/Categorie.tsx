interface VehicleCardProps {
    title: string;
    image: string;
  }
  
  const Categorie = ({ image, title }: VehicleCardProps) => {
    return (
      <div className="container flex justify-center items-center cursor-pointer">
        <div className="relative w-[18rem] h-[12rem] sm:w-[20rem] sm:h-[15rem] lg:w-[24rem] lg:h-[18rem] overflow-hidden rounded-lg group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              {title}
            </h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default Categorie;
  
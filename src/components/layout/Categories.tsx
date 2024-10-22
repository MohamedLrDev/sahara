import Categorie from "../common/Categorie";
import buggy from '../../assets/images/buggy_bg.jpg';
import quad from '../../assets/images/quad_bg.jpg';

const catProps = [
  {
    image: quad,
    title: "Quad",
  },
  {
    image: buggy,
    title: "Buggy",
  },
];

const Categories = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl pb-10 font-semibold">
        Categories
      </h1>

      <div className="flex flex-col md:flex-row md:justify-center">
        {catProps.map((item, index) => (
          <div
            key={index}
            className="mb-4 md:mb-0 md:ml-2 lg:mx-6 md:mx-4" // Add margin between items
          >
            <Categorie image={item.image} title={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

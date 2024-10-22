import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <ClipLoader color="#ffffff" size={100} />
    </div>
  );
};

export default Loader;

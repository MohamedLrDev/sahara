import VehicleCard from './VehicleCard';

const VehiclesContainer = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 px-5 justify-items-center my-10">
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
    </div>
  );
};

export default VehiclesContainer;

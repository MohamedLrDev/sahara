import VehicleCard from './VehicleCard';

const VehiclesContainer = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4   justify-items-center pt-5 ">
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
    </div>
  );
};

export default VehiclesContainer;

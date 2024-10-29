"use client";
const Page = () => {
  const cars = [
    { brand: "Toyota", model: "Corolla", price: 20000 },
    { brand: "Tesla", model: "Model S", price: 80000 },
    { brand: "Honda", model: "Civic", price: 25000 },
    { brand: "BMW", model: "X5", price: 60000 },
  ];
  const newArr = cars.filter((car) => {
    return car.price > 30000;
  });
  return (
    <div>
      {newArr.map((car, index) => {
        return (
          <div>
            {car.brand} : {car.model}
          </div>
        );
      })}
    </div>
  );
};
export default Page;

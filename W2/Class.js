//Plain Old Objects , use factories to mass produce objects with the same thing
const carFactory = function (make, years, miles) {
  return {
    make: make,
    yrsOld: years,
    mileage: miles,
  };
};

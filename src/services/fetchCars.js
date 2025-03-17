const API_URL = "https://challenge.egodesign.dev/api/models/";

export const fetchCars = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los datos");

    const data = await response.json();
    return data.filter(car => car.id !== 3); // Excluye el auto con id 3 porque su imagen rompe el diseño
  } catch (error) {
    console.error("Error en fetchCars:", error);
    return [];
  }
};

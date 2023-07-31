// UniversidadController.test.js
import request from "supertest";
import app from "../App"; // Asegúrate de importar la aplicación Express adecuadamente

describe("Prueba del controlador obtenerUniversidades", () => {
  it("debería devolver un código de estado 200 y un objeto JSON con las universidades", async () => {
    const response = await request(app).get("/universidad");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Verificar que la respuesta es un array

    // Aquí ajustamos las expectativas para verificar las propiedades del primer elemento en el array
    expect(response.body.length).toBeGreaterThan(0); // Verificar que el array no está vacío
    expect(response.body[0]).toHaveProperty("Id"); // El nombre de la propiedad debe ser "Id", no "id"
    expect(response.body[0]).toHaveProperty("Nombre");
    expect(response.body[0]).toHaveProperty("Ubicacion");
    expect(response.body[0]).toHaveProperty("Fundacion");
  });

  /*it("debería devolver un código de estado 500 si ocurre un error al obtener los datos", async () => {
    // Simulamos un error al obtener los datos
    jest.spyOn(console, "error").mockImplementation(() => {}); // Suprimimos la impresión del error en la consola

    jest.spyOn(global.console, "error").mockImplementation(() => {}); // Para versiones más nuevas de Jest

    jest.mock("../DataBase/Conection.js", () => ({
      getConnection: jest.fn(() => ({
        query: (sql, callback) => {
          callback(new Error("Error al obtener los datos de la tabla"));
        },
        releaseConnection: jest.fn(),
      })),
    }));

    const response = await request(app).get("/ruta/de/obtenerUniversidades");
    expect(response.status).toBe(500);
    expect(response.text).toBe("Error al obtener los datos");
  });

  // Puedes agregar más pruebas según las necesidades de tu aplicación*/
});

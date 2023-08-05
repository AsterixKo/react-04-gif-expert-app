import { getGifs } from "../../src/helpers/getGifs";

// const { getGifs } = require("../../src/helpers/getGifs");

describe("Pruebas en getGifs", () => {
  test("debe e retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");
    console.log(gifs);
  });
});

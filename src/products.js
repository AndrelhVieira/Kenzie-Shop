import pichau from "./images/pichau.jpg";
import corsair from "./images/corsair.jpg";
import fallen from "./images/fallen.jpg";
import huskyFrost from "./images/huskyFrost.jpg";
import hyperx from "./images/hyperx.jpg";
import jbl from "./images/jbl.jpg";
import sharkoon from "./images/sharkoon.jpg";

const products = [
  {
    id: 1,
    name: "Headset Pichau",
    price: 289.0,
    description: { brand: "Pichau", model: "P651 RGB 7.1 USB, PGH-P651-RGB" },
    image: pichau,
  },
  {
    id: 2,
    name: "Headset Fallen Morcego",
    price: 599.0,
    description: {
      brand: "Fallen Gear",
      model: "Surround Virtual 7.1, Drivers 53mm",
    },
    image: fallen,
  },
  {
    id: 3,
    name: "Headset JBL",
    price: 185.0,
    description: {
      brand: "JBL",
      model: "JBL Quantum 100, Drivers 40mm, Preto",
    },
    image: jbl,
  },
  {
    id: 4,
    name: "Headset Corsair",
    price: 385.0,
    description: {
      brand: "Corsair",
      model: "Void Elite USB, RGB, 7.1 Surround, Drivers 50 mm",
    },
    image: corsair,
  },
  {
    id: 5,
    name: "Headset Sharkoon",
    price: 128.0,
    description: { brand: "Sharkoon", model: "SGH2 Led Azul USB" },
    image: sharkoon,
  },
  {
    id: 6,
    name: "Headset Husky Frost",
    price: 144.0,
    description: {
      brand: "Husky Frost",
      model: "Estéreo, Driver 50mm - HS-FRS-ST",
    },
    image: huskyFrost,
  },
  {
    id: 7,
    name: "Headset HyperX",
    price: 274.0,
    description: { brand: "HyperX", model: "Cloud Stinger - HX-HSCS-BK/NA" },
    image: hyperx,
  },
];

export default products;

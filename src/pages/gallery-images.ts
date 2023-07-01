import { Image } from "react-grid-gallery";
import family from "../assets/family.jpg"
import family2 from "../assets/family2.jpg";
import family3 from "../assets/family3.jpg";
import family4 from "../assets/family4.jpg";
import family5 from "../assets/family5.jpg";
import family6 from "../assets/family6.jpg";
import family7 from "../assets/family7.jpg";
import family8 from "../assets/family8.jpg";
import family9 from "../assets/family9.jpg";
import family10 from "../assets/family10.jpg";
import family11 from "../assets/family11.jpg";
import family12 from "../assets/family12.jpg";
import family13 from "../assets/family13.jpg";
import family14 from "../assets/family14.jpg";
import family15 from "../assets/family15.jpg";
import fund from "../assets/fund.png";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: family,
    original: family,
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: family2,
    original: family2,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family3,
    original: family3,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family4,
    original: family4,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family5,
    original: family5,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family6,
    original: family6,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family7,
    original: family7,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family8,
    original: family8,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family9,
    original: family9,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family10,
    original: family10,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family11,
    original: family11,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family12,
    original: family12,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family13,
    original: family13,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family14,
    original: family14,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: family15,
    original: family15,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: fund,
    original: fund,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
];
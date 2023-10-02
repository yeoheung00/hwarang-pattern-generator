'use client'
import { ChangeEvent, UIEventHandler, useEffect, useRef, useState } from 'react';
import styles from './generator.module.css';

export default function Generator() {
  const [texts, setTexts] = useState([["a"]]);
  const [colors, setColors] = useState([["#000000"]]);

  const [size, setSize] = useState([1, 1]);

  const resize = () => {
    let tempText: string[][] = [];
    let tempColor: string[][] = [];
    // console.log(`size: ${size}`);
    for (let i = 0; i < size[1]; i++) {
      // console.log(`start row: ${i}`);
      let text = [];
      let color = [];
      for (let j = 0; j < (size[0] - (i % 2 == 1 ? 1 : 0)); j++) {
        // console.log(`\t${j}th column`);
        if (texts.length - 1 >= i) {
          // console.log("\t\tcord: ", texts[i], texts[i].length, j);
          if (texts[i].length - 1 >= j) {
            // console.log("\t\texist: ", texts[i]);
            text.push(texts[i][j]);
            color.push(colors[i][j]);
          } else {
            const random = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            // console.log("\t\trandom1:", random);
            text.push(random);
            color.push("#000000");
          }
        } else {
          const random = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          // console.log("\t\trandom2:", random)
          text.push(random);
          color.push("#000000");
        }
      }
      tempText.push(text);
      tempColor.push(color);
    }
    setTexts(tempText);
    setColors(tempColor);
    // console.log(texts);
  }

  const columnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSize((current) => [Number(event.target.value), current[1]]);
  }

  const rowChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSize((current) => [current[0], Number(event.target.value)])
  }

  useEffect(() => {
    resize();
  }, [size]);

  const [pixel, setPixel] = useState(5);
  const pixelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPixel(Number(event.target.value));
  }

  const [background, setBackground] = useState("#ffffff");
  const backgroundChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBackground(event.target.value);
  }

  const [fill, setFill] = useState("#000000");
  const fillChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFill(event.target.value);
  }

  const [brush, setBrush] = useState("distance");
  const [distance, setDistance] = useState(1);
  const [random, setRandom] = useState(30);
  const toDistance = () => {
    setBrush("distance");
  }
  const toRandom = () => {
    setBrush("random");
  }
  const brushValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (brush) {
      case "distance":
        setDistance(Number(event.target.value));
        break;
      case "random":
        setRandom(Number(event.target.value));
        break;
    }
    console.log(`value: ${distance}, ${random}`);
  }

  type dataType = {
    [index: string]: number[][]
  }
  const data: dataType = {
    a: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1]],

    b: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    c: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    d: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    e: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    f: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],

    g: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    h: [[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1]],

    i: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    j: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    k: [[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1]],

    l: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    m: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]],

    n: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1]],

    o: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    p: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],

    q: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    r: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0]],

    s: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    t: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],

    u: [[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    v: [[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],

    w: [[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    x: [[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1]],

    y: [[1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],

    z: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    empty: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
  }

  const viewerRef = useRef<HTMLCanvasElement>(null);

  const [scrollPosition, setScrollPosition] = useState([0, 0]);

  const scrolling = (event: { currentTarget: { scrollLeft: number; scrollTop: number; }; }) => {
    setScrollPosition([event.currentTarget.scrollLeft, event.currentTarget.scrollTop]);
  }


  const getFontPosition = (x: number, y: number): { x: number, y: number } => {
    const xx = Math.floor(y / (pixel * 9)) % 2 == 1 ? x - (pixel * 9) : x;
    const isOn = xx % (pixel * 18) > pixel && y % (pixel * 9) > pixel ? true : false;
    if (!isOn) return { x: -1, y: -1 };
    const fx = Math.floor(xx / (pixel * 18));
    const fy = Math.floor(y / (pixel * 9));
    return { x: fx, y: fy };
  }

  const select = (event: { clientX: number; clientY: number; }) => {
    const x = event.clientX + scrollPosition[0];
    const y = event.clientY - (viewerRef.current ? viewerRef.current.offsetTop : 0) + scrollPosition[1];
    const cord = getFontPosition(x, y);
    console.log(cord);
    const tempColor = colors;
    if (cord.x < 0 || cord.y < 0) return;
    switch (brush) {
      case "distance":
        console.log("distance: ", distance);
        const calc = cord.y % 2 == 1 ? 1 : 0;
        switch (distance) {
          case 3:
            if (cord.x - 2 >= 0) tempColor[cord.y][cord.x - 2] = fill;
            if (cord.x + 2 < tempColor[cord.y].length) tempColor[cord.y][cord.x + 2] = fill;

            if (cord.y - 1 >= 0) {
              if (cord.x - 2 + calc >= 0) tempColor[cord.y - 1][cord.x - 2 + calc] = fill;
              if (cord.x + 1 + calc < tempColor[cord.y - 1].length) tempColor[cord.y - 1][cord.x + 1 + calc] = fill;
            }
            if (cord.y + 1 < tempColor.length) {
              if (cord.x - 2 + calc >= 0) tempColor[cord.y + 1][cord.x - 2 + calc] = fill;
              if (cord.x + 1 + calc < tempColor[cord.y + 1].length) tempColor[cord.y + 1][cord.x + 1 + calc] = fill;
            }

            if (cord.y - 2 >= 0) {
              tempColor[cord.y - 2][cord.x] = fill;
              if (cord.x - 1 >= 0) tempColor[cord.y - 2][cord.x - 1] = fill;
              if (cord.x + 1 < tempColor[cord.y - 2].length) tempColor[cord.y - 2][cord.x + 1] = fill;
            }
            if (cord.y + 2 < tempColor.length) {
              tempColor[cord.y + 2][cord.x] = fill;
              if (cord.x - 1 >= 0) tempColor[cord.y + 2][cord.x - 1] = fill;
              if (cord.x + 1 < tempColor[cord.y + 2].length) tempColor[cord.y + 2][cord.x + 1] = fill;
            }
          case 2:
            if (cord.x - 1 >= 0) tempColor[cord.y][cord.x - 1] = fill;
            if (cord.x + 1 < tempColor[cord.y].length) tempColor[cord.y][cord.x + 1] = fill;
            if (cord.y - 1 >= 0) {
              if (cord.x - 1 + calc >= 0) tempColor[cord.y - 1][cord.x - 1 + calc] = fill;
              if (cord.x + calc < tempColor[cord.y - 1].length) tempColor[cord.y - 1][cord.x + calc] = fill;
            }
            if (cord.y + 1 < tempColor.length) {
              if (cord.x - 1 + calc >= 0) tempColor[cord.y + 1][cord.x - 1 + calc] = fill;
              if (cord.x + calc < tempColor[cord.y + 1].length) tempColor[cord.y + 1][cord.x + calc] = fill;
            }
          case 1:
            tempColor[cord.y][cord.x] = fill;
          default:
            break;
        }
        break;
      case "random":
        let tempRandom = random;
        const randomFill = (x: number, y:number) => {
          if(y>=0&&y<tempColor.length&&x>=0&&x<=tempColor[y].length) tempColor[y][x] = fill;
          const pick = Math.floor(Math.random() * 100);
          if(tempRandom>pick){
            tempRandom -= 10;
            randomFill(x+1, y);
            randomFill(x-1, y);
            randomFill(x, y+1);
            randomFill(x, y-1);
          }
        }
        randomFill(cord.x, cord.y);
        break;
    }
    tempColor[cord.y][cord.x] = fill;
    setColors(tempColor);
    rerender();
  }

  useEffect(() => {
    rerender();
  });

  const rerender = () => {
    console.log("update!");
    if (viewerRef.current) {

      const length = texts.map((element) => { return element.length });
      const row = length.length;
      const column = Math.max.apply(null, length);
      //console.log(`${row}*${column}`);

      let max = 0;
      for (let i = 0; i < length.length; i++) {
        if (i % 2 == 1 && length[i] > max) max = length[i]
      }

      const canvas = viewerRef.current;
      const context = viewerRef.current.getContext('2d') as CanvasRenderingContext2D;

      canvas.width = pixel + pixel * 18 * column + (max < column ? 0 : pixel * 9);
      canvas.height = pixel + pixel * 9 * row;

      context.fillStyle = background;
      context.fillRect(0, 0, canvas.width, canvas.height);

      const drawFont = (x: number, y: number, c: string, color: string) => {

        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 17; j++) {
            context.fillStyle = color;
            if ((data[c] ?? data['empty'])[i][j] == 1) context.fillRect(x + pixel * j, y + pixel * 2 * i, pixel, pixel * 2);
          }
        }
      }

      for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
          const startX = pixel + pixel * 18 * j + (i % 2 == 0 ? 0 : pixel * 9);
          const startY = pixel + pixel * 9 * i;
          if (texts[i].length > j) drawFont(startX, startY, texts[i][j], colors[i][j]);
          //console.log(`[${j}, ${i}], [${startX}, ${startY}]`);
        }
      }
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.controler}>
        <div className={styles.wrap}>
          <label htmlFor="column" className={styles.toolName}>Column</label>
          <input className={styles.input} style={{ marginRight: 10 }} id="column" type="number" value={size[0]} onChange={columnChange} />
          <label htmlFor="row" className={styles.toolName}>Row</label>
          <input className={styles.input} style={{ marginRight: 10 }} id="row" type="number" value={size[1]} onChange={rowChange} />
          <label htmlFor="pixel" className={styles.toolName}>Scale</label>
          <input className={styles.input} id="pixel" type="number" value={pixel} onChange={pixelChange} />
        </div>
        <div className={styles.divider} />
        <div className={styles.wrap}>
          <label className={styles.toolName} htmlFor="background">Background</label>
          <input className={styles.colorPicker} type="color" id="background" onChange={backgroundChange} value={background}></input>
        </div>
        <div className={styles.divider} />
        <div className={styles.wrap}>
          <label className={styles.toolName} htmlFor="fill">Fill</label>
          <input className={styles.colorPicker} type="color" id="fill" onChange={fillChange} value={fill}></input>
        </div>
        <div className={styles.divider} />
        <div className={styles.wrap}>
          <label className={styles.toolName}>Brush</label>
          <button className={`${styles.brush} ${brush == "distance" ? styles.active : null}`} style={{ marginRight: 10 }} onClick={toDistance}>Radius</button>
          <button className={`${styles.brush} ${brush == "random" ? styles.active : null}`} onClick={toRandom}>Random</button>
        </div>
        <div className={styles.divider} />
        <div className={styles.wrap}>
          <input className={styles.input} type="number" value={brush == "distance" ? distance : random} max={brush=="distance"?3:200} min={brush=="distance"?1:20} onChange={brushValueChange} />
        </div>
      </div>
      <div className={styles.display} onScroll={scrolling}>
        <div className={styles.scroller} onMouseDown={select}>
          <canvas className={styles.viewer} ref={viewerRef} />
        </div>
      </div>
    </div>
  )
}
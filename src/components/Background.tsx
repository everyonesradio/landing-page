'use client'
// Thank you George Francis: 
// https://georgefrancis.dev/writing/create-a-generative-landing-page-and-webgl-powered-background/
import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur';
import { createNoise2D } from 'simplex-noise';
import hsl from 'hsl-to-hex';
import debounce from 'debounce';

// return a random number within a range
const random = (min: number, max: number): number => {
 return Math.random() * (max - min) + min;
};

// map a number from 1 range to another
const map = (n: number, start1: number, end1: number, start2: number, end2: number): number => {
 return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
};

// Create a new simplex noise instance
const noise2D = new (createNoise2D as any)();

// ColorPalette class
class ColorPalette {
  hue!: number;
  complimentaryHue1!: number;
  complimentaryHue2!: number;
  saturation!: number;
  lightness!: number;
  baseColor!: string;
  complimentaryColor1!: string;
  complimentaryColor2!: string;
  colorChoices!: string[];

 constructor() {
    this.setColors();
    this.setCustomProperties();
 };

 setColors() {
    this.hue = ~~random(220, 360);
    this.complimentaryHue1 = this.hue + 30;
    this.complimentaryHue2 = this.hue + 60;
    this.saturation = 95;
    this.lightness = 50;

    this.baseColor = hsl(this.hue, this.saturation, this.lightness);
    this.complimentaryColor1 = hsl(this.complimentaryHue1, this.saturation, this.lightness);
    this.complimentaryColor2 = hsl(this.complimentaryHue2, this.saturation, this.lightness);

    this.colorChoices = [this.baseColor, this.complimentaryColor1, this.complimentaryColor2];
 };

 randomColor(): string {
    return this.colorChoices[~~random(0, this.colorChoices.length)].replace('#', '0x');
 };

 setCustomProperties() {
    document.documentElement.style.setProperty('--hue', this.hue.toString());
    document.documentElement.style.setProperty('--hue-complimentary1', this.complimentaryHue1.toString());
    document.documentElement.style.setProperty('--hue-complimentary2', this.complimentaryHue2.toString());
 };
};

// Orb class
class Orb {
 bounds: { x: { min: number; max: number }; y: { min: number; max: number } };
 x: number;
 y: number;
 scale: number;
 fill: number;
 radius: number;
 xOff: number;
 yOff: number;
 inc: number;
 graphics: PIXI.Graphics;

 constructor(fill: number = 0x000000) {
    this.bounds = this.setBounds();
    this.x = random(this.bounds['x'].min, this.bounds['x'].max);
    this.y = random(this.bounds['y'].min, this.bounds['y'].max);
    this.scale = 1;
    this.fill = fill;
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    this.inc = 0.002;

    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.825;

    window.addEventListener(
      'resize',
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
 };

 setBounds(): { x: { min: number; max: number }; y: { min: number; max: number } } {
    const maxDist = window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
    const originX = window.innerWidth / 1.25;
    const originY = window.innerWidth < 1000 ? window.innerHeight : window.innerHeight / 1.375;

    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist,
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist,
      },
    };
 };

 update() {
    const xNoise = noise2D(this.xOff, this.xOff);
    const yNoise = noise2D(this.yOff, this.yOff);
    const scaleNoise = noise2D(this.xOff, this.yOff);

    this.x = map(xNoise, -1, 1, this.bounds['x'].min, this.bounds['x'].max);
    this.y = map(yNoise, -1, 1, this.bounds['y'].min, this.bounds['y'].max);
    this.scale = map(scaleNoise, -1, 1, 0.5, 1);

    this.xOff += this.inc;
    this.yOff += this.inc;
 };

 render() {
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    this.graphics.clear();

    this.graphics.beginFill(this.fill);
    this.graphics.drawCircle(0, 0, this.radius);
    this.graphics.endFill();
 };
};

const Background = () => {
 useEffect(() => {
    const initPixi = async () => {
      const app = new PIXI.Application({
        view: document.querySelector('.orb-canvas') as HTMLCanvasElement,
        resizeTo: window,
        backgroundAlpha: 0,
      });

      const colorPalette = new ColorPalette();

      app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

      let orbs: Orb[] = [];

      for (let i = 0; i < 10; i++) {
        const orb = new Orb(parseInt(colorPalette.randomColor().replace('0x', ''), 16));
        app.stage.addChild(orb.graphics);
        orbs.push(orb);
      };

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        app.ticker.add(() => {
          orbs.forEach((orb) => {
            orb.update();
            orb.render();
          });
        });
      } else {
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      };

      document.addEventListener('click', () => {
        colorPalette.setColors();
        colorPalette.setCustomProperties();

        orbs.forEach((orb) => {
          orb.fill = parseInt(colorPalette.randomColor().replace('0x', ''), 16);
        });
      });
    };

    initPixi();
 }, []);

 return (
  <canvas className="orb-canvas"></canvas>
  );
};

export default Background;
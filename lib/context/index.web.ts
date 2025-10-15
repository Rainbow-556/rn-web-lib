import type { IContext } from '../types';

export class Context implements IContext {
  screenWidth!: number;
  screenHeight!: number;
  from = 'webweb';
  constructor() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}

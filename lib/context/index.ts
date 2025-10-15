import type { IContext } from '../types';

// 创建占位文件，避免ts报错
export class Context implements IContext {
  screenWidth!: number;
  screenHeight!: number;
  from = '原始';
  constructor() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}

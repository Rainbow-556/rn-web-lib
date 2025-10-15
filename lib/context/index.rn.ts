import type { IContext } from '../types';
import { Dimensions } from 'react-native';

export class Context implements IContext {
  screenWidth!: number;
  screenHeight!: number;
  from = 'rnrn';
  constructor() {
    this.screenWidth = Dimensions.get('window').width;
    this.screenHeight = Dimensions.get('window').height;
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
interface TableauVizElement {
  'hide-tabs'?: boolean;
  toolbar?: 'top' | 'bottom' | 'hidden';
  height?: string;
  width?: string;
  device?: 'phone' | 'tablet' | 'desktop' | 'default';
  src: string;
  children?: any;
}

interface TableauVizParameterElement {
  name?: string;
  value?: string | number | boolean;
}

declare namespace JSX {
  interface IntrinsicElements {
    'tableau-viz': TableauVizElement;
    'viz-parameter': TableauVizParameterElement;
  }
}

declare module 'turn.js' {
  const content: any;
  export default content;
}

// Extend Window interface to include jQuery
declare global {
  interface Window {
    $?: any;
    jQuery?: any;
  }
}

// Extend JQuery interface to include turn.js methods
interface JQuery {
  turn(options?: any): JQuery;
  turn(method: string, ...args: any[]): any;
}

export function isElementVisible (element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
  );
}

export class OnVisibilityChange {
  private oldVisibility: boolean | undefined;
  private checkHandler: () => void;
  private setted: boolean = false;
  static readonly realEvents = ['DOMContentLoaded', 'load', 'scroll', 'resize'];

  constructor(element: HTMLElement, callback: (visible?: boolean) => void) {
    this.checkHandler = () => {
      const currentVisibility = isElementVisible(element);
  
      if (currentVisibility !== this.oldVisibility) {
        this.oldVisibility = currentVisibility;
        callback(currentVisibility);
      }
    }

    this.setAgain();
  }

  setAgain() {
    if (this.setted) throw new Error('The event has been already setted.');

    OnVisibilityChange.realEvents.forEach(eName => {
      window.addEventListener(eName, this.checkHandler);
    });

    this.setted = true;
  }

  unset() {
    OnVisibilityChange.realEvents.forEach(eName => {
      window.removeEventListener(eName, this.checkHandler);
    });

    this.setted = false;
  }
}

export function mw(minWidth: number) {
  return window.matchMedia(`(min-width: ${minWidth}px)`).matches;
}

/*export function importAll (r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
  r.keys().forEach((e)=>console.log(e));
}*/

export function importAll(r: __WebpackModuleApi.RequireContext) {
  return r.keys().map(r);
}

//console.table(importAll(require.context('../data/', false)));

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = window.setTimeout;
  window.cancelAnimationFrame = window.clearTimeout;
}

export function requestTimeout(fn: ()=>void, delay: number): void {
  const start = (new Date()).getTime();
  let id: number | undefined;

  const checker = () => {
    const delta = (new Date()).getTime() - start;

    if (delta >= delay) {
      fn();
      id = undefined;
      return;
    }

    id = requestAnimationFrame(checker);
  }

  id = requestAnimationFrame(checker);

  // @ts-ignore
  return () => (id !== undefined) && window.cancelAnimationFrame(id);
}
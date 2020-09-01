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
      addEventListener(eName, this.checkHandler);
    });

    this.setted = true;
  }

  unset() {
    OnVisibilityChange.realEvents.forEach(eName => {
      removeEventListener(eName, this.checkHandler);
    });

    this.setted = false;
  }
}
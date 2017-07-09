import { ElementRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class MapMarkerElementFactoryService {

  constructor(@Inject(DOCUMENT) private document: any) { }

  createGeolocationMarker(): ElementRef {
    const element = document.createElement('div');
    element.classList.add('mad-geolocation-marker');
    element.style.backgroundColor = 'rgba(165, 204, 0, 0.8)';
    element.style.borderRadius = '50%';
    element.style.width = '20px';
    element.style.height = '20px';

    const innerElement = document.createElement('div');
    innerElement.style.position = 'absolute';
    innerElement.style.top = '5px';
    innerElement.style.left = '5px';
    innerElement.style.width = '10px';
    innerElement.style.height = '10px';
    innerElement.style.backgroundColor = 'black';
    innerElement.style.borderRadius = '50%';
    element.appendChild(innerElement);

    return new ElementRef(element);
  }

}

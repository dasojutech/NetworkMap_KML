import MapView from "@arcgis/core/views/MapView";

declare global {
  interface Window {
    __mapView?: MapView;
  }
}

export {};
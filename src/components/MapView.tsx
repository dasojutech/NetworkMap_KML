// import { useEffect, useRef } from "react";
// import Map from "@arcgis/core/Map";
// import MapView from "@arcgis/core/views/MapView";

// export default function MapViewComponent() {
//   const mapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const map = new Map({
//       basemap: "osm"
//     });

//     const view = new MapView({
//       container: mapRef.current!,
//       map,
//       center: [-111.4525, 44.2559],
//       zoom: 4
//     });

//     (window as any).__mapView = view;

//     return () => view.destroy();
//   }, []);

//   return <div style={{ height: "100vh", width: "100%" }} ref={mapRef} />;
// }

import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/assets/esri/themes/light/main.css";

export default function MapViewComponent() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 🗺️ Create map
    const map = new Map({
      basemap: "streets",
    });

    // 📍 Create view
    const view = new MapView({
      container: mapRef.current!,
      map,
      center: [-111.4525, 44.2559],
      zoom: 4,
      ui: {
        components: ["zoom"],
      },
    });
    view.when(() => {
      view.ui.move("zoom", "top-left");
    });

    const pointLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/TLIL6unQdnLDwrtI/arcgis/rest/services/Map_kmz/FeatureServer/1",
    });

    const lineLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/TLIL6unQdnLDwrtI/arcgis/rest/services/Map_kmz/FeatureServer/2",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-line",
          color: "red",
          width: 3,
        },
      },
    });
    pointLayer.when(() => {
      const fields = pointLayer.fields.map((f) => ({
        fieldName: f.name,
        label: f.alias,
      }));

      pointLayer.popupTemplate = {
        title: "Point-Attributes",
        content: [
          {
            type: "fields",
            fieldInfos: fields,
          },
        ],
      };
    });
    lineLayer.when(() => {
      const fields = pointLayer.fields.map((f) => ({
        fieldName: f.name,
        label: f.alias,
      }));

      lineLayer.popupTemplate = {
        title: "Line-Attributes",
        content: [
          {
            type: "fields",
            fieldInfos: fields,
          },
        ],
      };
    });

    // ➕ Add both layers
    map.addMany([lineLayer, pointLayer]);

    // (optional) expose for debugging
    (window as any).__mapView = view;

    // 🧹 Cleanup
    return () => {
      if (view) view.destroy();
    };
  }, []);

  return <div ref={mapRef} style={{ height: "100%", width: "100%" }} />;
}

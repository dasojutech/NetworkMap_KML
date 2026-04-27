import axios from "axios";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

export default function UploadPanel() {
  const handleFile = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://127.0.0.1:8000/upload", formData);

      const url = res.data.url;

      if (!url) {
        console.error("No URL returned from backend");
        return;
      }

      const layer = new GeoJSONLayer({
        url: res.data.url,
      });

      window.__mapView?.map?.add(layer);
      layer.when(() => {
        console.log("GeoJSON loaded");
        window.__mapView?.goTo(layer.fullExtent as any);
      });
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <div>
      <input type="file" accept=".kmz,.kml" onChange={handleFile} />
    </div>
  );
}

import React from "react";
import "./styles.css";

export default function SpeedMeter({ index }) {
  return (
    <div className="speedMeter">
      <div className="rang">
        <svg className="meter">
          <circle className="meter_left" r="96" cx="135" cy="142"></circle>
          <circle className="meter_center" r="96" cx="136" cy="142"></circle>
          <circle className="meter_right" r="96" cx="138" cy="142"></circle>
          <polygon
            className={`meter_clock${index}`}
            points="129,145 137,90 145,145"
          ></polygon>
          <circle className="meter_circle" r="10" cx="137" cy="145"></circle>
        </svg>
      </div>
    </div>
  );
}

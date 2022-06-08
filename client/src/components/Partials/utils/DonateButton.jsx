import React, { useEffect, useRef, useMemo, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from '@fortawesome/free-brands-svg-icons'

let counter = 0;
const generateId = () => {
  return `ID-${++counter}`; // if it is necessary, use some better unique id generator
};

export default function DonateButton({ w, h, color, hoverColor, maxH }) {
  const [hover, setHover] = useState(false);
  const buttonRef = useRef(null);
  const buttonId = useMemo(() => `ID-${generateId()}`, []);
  const size = useRef(null);

  useEffect(() => {
    console.log("w: ", w)
    console.log("h: ", h)
    console.log("color: ", color)
    console.log("hover: ", hoverColor)
    size.current = {
      x: parseInt(w.replace("w-", "")) * 4,
      y: parseInt(h.replace("h-", "")) * 4,
    }

    window.PayPal.Donation.Button({
      env: 'production',
      hosted_button_id: 'MD97XETKTDLPN',
      image: {
        // 74x21 px sized white placeholder image
        src: "data:image/svg+xml;utf8,"
          + "<svg xmlns=\"http://www.w3.org/2000/svg\" "
          + "xmlns:xlink=\"http://www.w3.org/1999/xlink\" "
          + "width=\""
          + size.current.x
          + "\" "
          + "height=\""
          + size.current.y 
          + "\" "
          + "><image width=\""
          + size.current.x
          + "\" height=\""
          + size.current.y
          + "\" "
          + "xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAVCAYAAADhCHhTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA/SURBVFhH7dCBAAAADASh+Uv/FAK4ELqFFIWKQkWholBRqChUFCoKFYWKQkWholBRqChUFCoKFYWKQkWhosj2p7cxIQEGzWMAAAAASUVORK5CYII=\" /></svg>",
        alt: 'Donate with PayPal button',
        title: 'PayPal - The safer, easier way to pay online!',
      }
    }).render(`#${buttonRef.current.id}`);
  }, []);
  return (
    <div className={`${maxH} relative cursor-pointer overflow-hidden`}>
      <div
        ref={buttonRef}
        id={buttonId}
        onMouseEnter={() => { setHover(true) }}
        onMouseLeave={() => { setHover(false) }}
        className="cursor-pointer opacity-0"
      >
      </div>
      <FontAwesomeIcon 
        icon={faPaypal} 
        className={`${hover ? hoverColor.replace("hover:", "") : color} 
        absolute top-0 left-0 ${w} ${h} pointer-events-none`} 
      />

    </div>

  );
};

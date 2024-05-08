import React, { useState } from 'react';

export default function Range({ min, max, value, onChange }) {
  const [thumbStyle, setThumbStyle] = useState({ left: 0, right: 0 });

  const handleDrag = (event, isLeftThumb) => {
    const slider = event.currentTarget;
    const clientX = event.clientX;
    const sliderWidth = slider.clientWidth;

    const newPercentage = Math.min(
      Math.max((clientX - slider.offsetLeft) / sliderWidth, 0),
      1,
    );
    const newValue = Math.round(newPercentage * (max - min)) + min;

    const leftValue = isLeftThumb ? newValue : value[1];
    const rightValue = !isLeftThumb ? newValue : value[0];

    setThumbStyle({
      left: isLeftThumb ? `${newPercentage * 100}%` : '',
      right: !isLeftThumb ? `${(1 - newPercentage) * 100}%` : '',
    });

    onChange([leftValue, rightValue]);
  };

  return {
    /*<div className="range-slider flex items-center">
      <div className="slider-track h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="thumb h-4 w-4 cursor-grab rounded-full bg-blue-500 active:bg-blue-700"
          onMouseDown={(e) => handleDrag(e, true)}
        />
        <div
          className="thumb h-4 w-4 cursor-grab rounded-full bg-blue-500 active:bg-blue-700"
          style={thumbStyle.right}
          onMouseDown={(e) => handleDrag(e, false)}
        />
      </div>
      <div className="slider-values ml-4 text-sm font-medium">
        <span>{value[0]}</span>
        <span className="ml-4">{value[1]}</span>
      </div>
  </div>*/
  };
}

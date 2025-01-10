"use client";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function Page() {

  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([20, 80]);

  return (
    <div>
      Value: <span>{sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        min={0}
        max={100}
        step={1}
        className="my-3"
      />

      Range: <span>{rangeValue[0]} - {rangeValue[1]}</span>
      <Slider
        defaultValue={rangeValue}
        onValueChange={(value) => setRangeValue(value)}
        min={0}
        max={100}
        step={1}
        className="my-3"
      />
    </div>
  );
}

"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function Page() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      value={progress}
      indicatorColor={cn({
        "bg-red-500": progress < 33,
        "bg-yellow-500": progress >= 33 && progress < 66,
        "bg-green-500": progress >= 66,
      })}
    />
  );
}

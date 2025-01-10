"use client";

import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-2">
      <Badge>default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="info">info</Badge>
      <Badge variant="warning" uppercase>
        warning
      </Badge>
      <Badge variant="success" capitalize>
        success
      </Badge>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, MailOpen } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button variant="secondary" onClick={() => alert("clicked")}>
        click me
      </Button>
      <Button variant="success" capitalize={false}>
        success
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => alert("clicked icon")}
      >
        <ChevronRight />
      </Button>
      <Button variant="secondary">
        <MailOpen /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
      <Button variant="secondary" onClick={handleLoading} disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="animate-spin" />
            Loading...
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </div>
  );
}

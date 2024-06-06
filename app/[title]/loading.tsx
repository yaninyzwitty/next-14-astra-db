import { Loader2 } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader2 className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
}

export default Loading;

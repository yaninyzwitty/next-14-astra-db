import {cn} from "@/lib/utils";
import React, {PropsWithChildren} from "react";

function MaxWidthWrapper({
  className,
  children,
}: PropsWithChildren<{className?: string}>) {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;

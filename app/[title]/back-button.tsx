"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };
  return (
    <Button size={"icon"} onClick={onClick}>
      <ArrowLeft className="size-4" />
    </Button>
  );
}

export default BackButton;

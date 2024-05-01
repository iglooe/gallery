"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { XCircle } from "lucide-react";

import { Button } from "~/components/ui/button";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/80 align-baseline">
      <dialog
        ref={dialogRef}
        className="relative flex items-center justify-center rounded-md bg-zinc-900/70"
        onClose={onDismiss}
      >
        {children}
        <Button onClick={() => onDismiss()} variant="close" size="icon">
          <XCircle className="h-10 w-10" />
        </Button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}

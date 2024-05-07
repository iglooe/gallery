"use client"

import { useEffect, useRef, type ElementRef } from "react"
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<"dialog">>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.back()
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="absolute flex h-dvh w-full items-center justify-center bg-black/90"
      onClose={onDismiss}
    >
      {children}
      {/* <button onClick={onDismiss} className="close-button" /> */}
    </dialog>,
    document.getElementById("modal-root")!
  )
}

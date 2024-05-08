import { ModalPopup } from "~/views/modal-view"

import { Modal } from "./modal"

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  return (
    <Modal>
      <ModalPopup photoId={photoId} />
    </Modal>
  )
}

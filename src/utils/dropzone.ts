// Notifications
import { notify } from '@/notifications/notify'

// DropzoneJS
import type Dropzone from 'dropzone'

interface Props {
  dropzone: Dropzone
  file: Dropzone.DropzoneFile
}

export function removeInvalidFile({ dropzone, file }: Props) {
  dropzone.removeFile(file)

  notify({
    type: 'error',
    text: `The file "${file.name}" isn't a valid image`
  })
}

export function fileIsInvalid(file: Dropzone.DropzoneFile) {
  return file.accepted === false
}

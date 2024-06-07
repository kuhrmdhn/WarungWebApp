import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div>
      Not Found Page!
    <button type="button" onClick={() => router.back()}>Back</button>
    </div>
  )
}

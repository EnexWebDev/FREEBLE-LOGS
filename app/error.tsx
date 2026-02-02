'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">Oops! Something went wrong</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We encountered an unexpected error. Please try again.
        </p>
        {error.message && (
          <p className="mt-2 text-sm text-muted-foreground">
            Error: {error.message}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" onClick={() => reset()}>
            Try again
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.location.href = '/'}>
            Go back home
          </Button>
        </div>
      </div>
    </div>
  )
}

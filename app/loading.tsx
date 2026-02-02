import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header skeleton */}
      <div className="sticky top-0 z-50 border-b border-border bg-background px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Skeleton className="h-10 w-32" />
          <div className="hidden gap-8 md:flex">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <main className="flex-1">
        {/* Hero section */}
        <div className="space-y-6 bg-background px-6 py-24">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <Skeleton className="mx-auto h-12 w-3/4" />
            <Skeleton className="mx-auto h-6 w-full" />
            <Skeleton className="mx-auto h-6 w-5/6" />
            <div className="mt-10 flex justify-center gap-4">
              <Skeleton className="h-11 w-40" />
              <Skeleton className="h-11 w-40" />
            </div>
          </div>
        </div>

        {/* Services section */}
        <div className="space-y-6 bg-muted/50 px-6 py-24">
          <Skeleton className="mx-auto h-10 w-64" />
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="space-y-6 bg-background px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer skeleton */}
      <div className="border-t border-border bg-muted/30 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="flex gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

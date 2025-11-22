export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8" role="status" aria-label="Loading">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}


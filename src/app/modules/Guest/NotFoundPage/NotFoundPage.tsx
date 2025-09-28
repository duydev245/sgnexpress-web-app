import illustration from '@/assets/images/404-image.png'

const NotFoundPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 bg-gradient-to-br from-[#fff9e6] via-[#fff5d1] to-[#fff1bb] w-screen h-screen overflow-hidden box-border"
      role="main"
      aria-label="404 Not Found"
    >
      <img src={illustration} alt="404 Not Found Illustration" className="w-full max-w-[520px]" />

      <p className="text-foreground mb-10 text-center max-w-xl text-lg break-words">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="inline-block px-8 py-4 rounded-xl text-primary-foreground text-lg font-bold shadow-md transition-colors duration-200 bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Back to Home"
      >
        Back to Home
      </a>
    </div>
  )
}

export default NotFoundPage

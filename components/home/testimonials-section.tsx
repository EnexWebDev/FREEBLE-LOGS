const testimonials = [
  {
    content:
      "Bought an aged Instagram account from FREEBLE. Fast delivery and the account was exactly as described. Will definitely buy again!",
    author: "David K.",
    role: "Content Creator",
  },
  {
    content:
      "Needed a verified Twitter account for my business. FREEBLE delivered within 2 hours. Super reliable service.",
    author: "Ralph A.",
    role: "Business Owner",
  },
  {
    content: "Best place to buy TikTok accounts. Affordable prices and great customer support on WhatsApp.",
    author: "Chris M.",
    role: "Digital Marketer",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">Trusted by buyers worldwide.</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <blockquote className="flex-1 text-muted-foreground">"{testimonial.content}"</blockquote>
              <div className="mt-6 border-t border-border pt-6">
                <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

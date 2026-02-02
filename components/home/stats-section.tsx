const stats = [
  { id: 1, name: "Accounts Sold", value: "2,500+" },
  { id: 2, name: "Happy Customers", value: "1,000+" },
  { id: 3, name: "Platforms Covered", value: "3" },
  { id: 4, name: "Satisfaction Rate", value: "99%" },
]

export function StatsSection() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-2">
              <dt className="text-sm font-medium text-primary-foreground/80">{stat.name}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

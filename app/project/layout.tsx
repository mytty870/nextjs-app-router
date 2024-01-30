import React from "react"

export default function ProjectLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>ccc</nav>

      {children}
    </section>
  )
}
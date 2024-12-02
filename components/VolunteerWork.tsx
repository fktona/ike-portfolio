export default function VolunteerWork() {
  return (
    <section className="container py-10 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12">VOLUNTEER WORK</h2>
      <div className="space-y-6 md:space-y-8">
        {[
          { role: "UX Mentor", organization: "Code for Good", period: "2022 - Present" },
          { role: "Design Workshop Facilitator", organization: "Local Design Community", period: "2021 - Present" },
          { role: "Web Developer", organization: "Non-Profit Organization", period: "2020 - 2022" },
        ].map((work, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-full md:w-1/4">
              <p className="font-bold">{work.role}</p>
              <p className="text-sm text-muted-foreground">{work.period}</p>
            </div>
            <div className="w-full md:w-3/4">
              <p className="text-lg">{work.organization}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Contributed expertise in UX design and mentored aspiring designers, helping them develop their skills and advance their careers.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


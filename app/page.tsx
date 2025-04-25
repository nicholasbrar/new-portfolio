import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>

      <p className="mb-8">
        Hi! I'm a developer with a keen interest in software development and AI. I enjoy working on projects that help improve efficiency and make everyday tasks easier for users. 
        Currently, I'm at Dealer Shock building an AI-powered solutions for car dealerships to improve customer interactions and support sales. Outside of coding, I enjoy playing Geoguessr and chess competitively.
      </p>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <ul>
          <li className="mb-4">
            <strong>Dealershock</strong> — AI Developer (Jan. 2025-Present)
            <ul className="list-disc ml-6">
              <li>abc.</li>
              <li>xyz.</li>
            </ul>
          </li>
          {}
        </ul>
      </div>
    </section>
  )
}

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
            <strong>Dealer Shock</strong> — Software Engineer Intern (Jan. 2025-Present)
            <ul className="list-disc ml-6">
              <li>
                I built our mobile app from the ground up using React Native and Expo, and automated VIN scanning with JavaScript, reducing manual data entry by 90%. 
                I currently work on both mobile and web apps in Agile sprints, delivering regular updates and continuously improving the user experience.
              </li>
              <li>
                I’m developing an AI-powered chatbot with multi-tenant architecture for car dealerships, ensuring secure data isolation between dealerships, and 
                leveraging semantic parsing and NLP for natural language queries and real-time vehicle recommendations.
              </li>

            </ul>
          </li>
          {}
        </ul>
      </div>
    </section>
  )
}

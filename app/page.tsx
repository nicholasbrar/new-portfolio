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
      
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

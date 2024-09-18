import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Daniel Abella
      </h1>
      <p className="mb-4">
        {`I spent most of my career in hospitality while studying for Computer Science at Georgia State University. 
        I love the challenges software engineering brings to the table such as having to think logically and creatively to solve problems while also learning new technologies all the time. 
        I bring hands-on, technical experience in full stack application development using Python, JavaScript, Java, and React. 
        My current project right now is a football fantasy matchup predictor. 
        When I'm not coding, I consider myself an outdoors type of guy playing Ultimate Frisbee, Pickleball, volleyball, playing video games, and the list goes on. 
        I have many hobbies that interests me.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

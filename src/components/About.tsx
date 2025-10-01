import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with 5+ years of experience building scalable web applications 
              and creating user-centered designs that solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-4">
                I started my journey in web development 5 years ago, driven by curiosity and 
                a passion for creating digital solutions. What began as a hobby quickly became 
                my career as I discovered the endless possibilities of code.
              </p>
              <p className="text-muted-foreground">
                Today, I specialize in React, Node.js, and modern web technologies, helping 
                businesses transform their ideas into powerful digital experiences.
              </p>
            </div>
            
            <div className="grid gap-6">
              <article className="text-center hover:shadow-lg transition-shadow rounded-[10px] border border-gray-200 bg-white px-4 pt-2 pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-tl from-blue-300 to-blue-500 mt-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Full-stack Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building robust applications from frontend to backend with modern technologies.
                    </p>
                  </div>
                </div>
              </article>
              
              <article className="text-center hover:shadow-lg transition-shadow rounded-[10px] border border-gray-200 bg-white px-4 pt-2 pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-tl from-amber-200 to-amber-400 mt-5">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Internet of Things</h4>
                    <p className="text-sm text-muted-foreground">
                      I'm fascinated by how hardware and software interact. I love designing and building connected devices that make our world smarter.                    </p>
                  </div>
                </div>
              </article>
              
              <article className="text-center hover:shadow-lg transition-shadow rounded-[10px] border border-gray-200 bg-white px-4 pt-2 pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-tl from-blue-300 to-blue-500 gap-5 mt-5">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensuring applications are fast, scalable, and provide exceptional user experiences.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
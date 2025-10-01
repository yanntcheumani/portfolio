
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React JS/TS", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
  },
  {
    title: "Backend",
    skills: ["Python", "PostgreSQL", "MongoDB", "Django", "Flask", "FastAPI", "Streamlit"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "AWS", "Figma", "Jest"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-100" id="Skill">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Skills & Technologies
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I work with modern technologies and tools to build scalable, 
                performant applications that deliver exceptional user experiences.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                {skillCategories.map((category, index) => (
                    <article key={index} className="text-center hover:shadow-lg transition-shadow rounded-[10px] border border-gray-200 bg-white px-4 pt-2 pb-4">
                        <h3 className="text-xl font-semibold mb-6 text-foreground">
                            {category.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-1">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex} 

                                    className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"
                                >
                                    {skill}
                                </span>


                            ))}
                            <span
                            className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"
                            >
                            Snippet
                            </span>

                            <span
                            className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"
                            >
                            JavaScript
                            </span>
                        </div>
                    </article>
                    // <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    //     <h3 className="text-xl font-semibold mb-6 text-foreground">
                    //     {category.title}
                    //     </h3>
                    //     <div className="flex flex-wrap gap-2 justify-center">
                        // {category.skills.map((skill, skillIndex) => (
                        //     <Badge 
                        //     key={skillIndex} 
                        //     variant="secondary"
                        //     className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        //     >
                        //     {skill}
                        //     </Badge>
                        // ))}
                    //     </div>
                    // </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
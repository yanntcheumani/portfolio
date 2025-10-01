import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";


function Hero() {
    return (
        <>
            <section className="bg-linear-to-bl to-amber-500 from-pink-500 w-full lg:grid lg:h-screen lg:place-content-center">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Hi, I'm <span className="text-gradient">Yann</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 mx-auto">
                        I am a <b className='text-amber-200'>polyvalent</b> developer passionate about <b className='text-amber-200'>creating innovative projects</b> and <b className='text-amber-200'>solving concrete problems</b>. I explore different areas of development (web, cloud, AI, robotics) while advancing my personal and professional projects.
                    </p>

                <div className="mt-4 flex justify-center gap-5 sm:mt-6">
                    <a
                    className="inline-block rounded border w-lg border-amber-200 bg-amber-200 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-amber-300 hover:text-black"
                    href="#Skill"
                    >
                    Get Started <ArrowDown className="h-5 w-full" />
                    </a>

                    <a
                    className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black"
                    href="#Contact"
                    >
                    Contact Me
                    </a>
                </div>
                <br />
                <br />
                <div className="flex justify-center gap-4">
                    <a 
                    href="https://github.com" 
                    className="text-white hover:text-amber-200 transition-colors p-3 rounded-full hover:bg-white/10"
                    >
                    <Github className="h-6 w-6" />
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/yann-arthur-tcheumani-mbialeu/" 
                    className="text-white hover:text-amber-200 transition-colors p-3 rounded-full hover:bg-white/10"
                    >
                    <Linkedin className="h-6 w-6" />
                    </a>
                    <a 
                    href="mailto:tcheumaniyannarthur@gmail.com" 
                    className="text-white hover:text-amber-200 transition-colors p-3 rounded-full hover:bg-white/10"
                    >
                    <Mail className="h-6 w-6" />
                    </a>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Hero;
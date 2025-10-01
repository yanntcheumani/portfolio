import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/50" id="Contact">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
<div className="text-center">
  <div>
    <h3 className="text-2xl font-semibold mb-6 text-foreground">
      Let's Start a Conversation
    </h3>
    
    <div className="grid lg:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-tl from-blue-300 to-blue-500">
          <Mail className="h-5 w-5 text-black" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-foreground">Email</h4>
          <p className="text-muted-foreground">tcheumaniyannarthur@gmail.com</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-tl from-amber-200 to-amber-400">
          <Phone className="h-5 w-5 text-black" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-foreground">Phone</h4>
          <p className="text-muted-foreground">+33 6 12 14 49 89</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-tl from-blue-300 to-blue-500">
          <MapPin className="h-5 w-5 text-black" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-foreground">Location</h4>
          <p className="text-muted-foreground">France, Paris</p>
        </div>
      </div>
    </div>

    <div className="flex justify-center gap-4">
      <a 
        href="https://github.com" 
        className="p-3 rounded-lg bg-card hover:bg-primary hover:text-white transition-colors"
      >
        <Github className="h-5 w-5" />
      </a>
      <a 
        href="https://linkedin.com" 
        className="p-3 rounded-lg bg-card hover:bg-primary hover:text-white transition-colors"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a 
        href="mailto:tcheumaniyannarthur@gmail.com" 
        className="p-3 rounded-lg bg-card hover:bg-primary hover:text-white transition-colors"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
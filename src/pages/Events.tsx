import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import EventCard from '@/components/EventCard';

const allEvents = [
  {
    title: 'Hackathon',
    description: 'A hybrid hackathon organized by JODC where students from both campuses collaborate to build innovative tech solutions and present their prototypes in a competitive final showcase.',
    date: '12th - 14th March',
    featured: true,
    href: '/events/hackathon',
  },
  {
    title: 'Linux Setup Workshop',
    description: 'Comprehensive workshop on Linux installation & setup, command-line basics, and development environment introduction. Perfect for beginners looking to start with Linux.',
    date: 'Coming Soon',
    href: '/events/linux-workshop',
  },
  {
    title: 'Bug Bounty Event',
    description: 'Explore the bug bounty ecosystem, ethical hacking fundamentals, and vulnerability discovery basics. Learn how security researchers find and report bugs.',
    date: 'Coming Soon',
    href: '/events/bug-bounty',
  },
  {
    title: 'Capture the Flag',
    description: 'Team-based cybersecurity competition with real-world problem statements. Focuses on practical skills in areas like web security, cryptography, and reverse engineering. ',
    date: 'Coming Soon',
    href: '/events/hackathon',
  },
];

const Events = () => {
  return (
    <Layout>
      <section className="py-20 px-4 min-h-screen">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              OUR <span className="text-secondary">EVENTS</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover workshops, hackathons, and learning opportunities designed to help you grow as a developer
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;

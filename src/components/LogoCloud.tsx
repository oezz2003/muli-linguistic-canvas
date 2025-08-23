import { motion } from 'framer-motion';

export function LogoCloud() {
  // Placeholder company names
  const companies = [
    'TechCorp', 'GlobalTech', 'Innovation Labs', 'Future Systems',
    'Digital Solutions', 'Enterprise Plus', 'NextGen', 'CloudWorks'
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-muted-foreground">
          Trusted by leading companies worldwide
        </h3>
      </div>
      
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex space-x-12 whitespace-nowrap"
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center justify-center bg-card border rounded-lg px-6 py-4 shadow-sm min-w-[180px]"
            >
              <span className="text-muted-foreground font-medium text-sm">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
const SectionHeading = ({ 
  title, 
  subtitle, 
  description,
  centered = true 
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {subtitle && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

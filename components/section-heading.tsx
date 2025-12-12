interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionHeading = ({ children, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-4">
      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

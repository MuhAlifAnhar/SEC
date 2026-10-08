type PageHeaderProps = {
  title: string;
  highlight: string;
  subtitle?: string;
};

export default function PageHeader({ title, highlight, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center pt-28 md:pt-32 pb-8 md:pb-12">
      <h1 className="font-pixel text-2xl sm:text-3xl md:text-5xl text-white mb-4 tracking-widest uppercase leading-snug">
        {title} <br className="sm:hidden" />
        <span className="text-sec-cyan">{highlight}</span>
      </h1>
      {subtitle && (
        <p className="font-inter text-sec-textSecondary text-xs sm:text-sm md:text-base uppercase tracking-widest font-bold">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-sec-cyan to-sec-yellow mx-auto"></div>
    </div>
  );
}

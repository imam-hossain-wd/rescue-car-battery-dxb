export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  popular, 
  premium,
  index = 0 
}) {
  return (
    <div 
      className="group relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 transition-all duration-500 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-2xl hover:shadow-[#FFC400]/10 hover:-translate-y-2 overflow-hidden"
      style={{ 
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-[#FFC400]/5 via-transparent to-[#FFC400]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-transparent via-white/5 to-transparent rotate-45 group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Popular/Premium Badge */}
      {(popular || premium) && (
        <div className={`absolute -top-2 -right-2 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg z-10 animate-pulse ${
          popular 
            ? "bg-[#FFC400] text-[#090B0D] shadow-[#FFC400]/40" 
            : "bg-linear-to-br from-purple-500 to-purple-600 text-white shadow-purple-500/40"
        }`}>
          {popular ? "🔥 Most Popular" : "⭐ Premium"}
        </div>
      )}

      {/* Icon with animated background */}
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-[#FFC400]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FFC400]/20 transition-all duration-300 relative">
          {/* Icon pulse ring */}
          <div className="absolute inset-0 rounded-xl bg-[#FFC400]/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          <Icon className="w-7 h-7 text-[#FFC400] relative z-10" />
        </div>

        {/* Title with gradient on hover */}
        <h3 className="text-sm font-bold text-[#090B0D] dark:text-white mb-2 group-hover:text-[#FFC400] transition-colors duration-300 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Decorative line that expands on hover */}
        <div className="w-12 h-0.5 bg-[#FFC400]/30 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
      </div>

      {/* Bottom right decorative icon */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <Icon className="w-12 h-12 text-[#FFC400]" />
      </div>
    </div>
  );
}
const SectionHeading = ({ title, subtitle, align = "center", light = false }) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <span
          className={`block text-xs font-bold uppercase tracking-widest mb-3 ${
            light ? "text-gray-400" : "text-[#ED206F]"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold font-montserrat ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;

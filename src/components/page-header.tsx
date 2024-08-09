function PageHeader({
  header,
  description,
}: {
  header: string;
  description: string;
}) {
  return (
    <div className="flex max-w-[650px] flex-col gap-7">
      <h1 className="text-5xl font-semibold leading-tight tracking-[-0.02em] text-slate-800 sm:leading-[3.5rem]">
        {header}
      </h1>
      <p className="text-lg leading-relaxed text-base-content/70">
        {description}
      </p>
    </div>
  );
}

export default PageHeader;

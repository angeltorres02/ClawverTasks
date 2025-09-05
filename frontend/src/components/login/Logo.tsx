export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <img
        src="/assets/logo-v2.svg"
        alt="Logo de la página Clawver Tasks"
        fetchPriority="high"
      />
      <h1 className="font-bold text-[#222] text-4xl ">Clawver Tasks</h1>
    </div>
  );
};

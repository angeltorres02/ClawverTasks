interface Props {
  className?: string;
}

export const ProfileInfo = ({ className }: Props) => {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-2 text-white`}
    >
      <p className="text-2xl font-semibold">Angel</p>
      <img
        src="/assets/profile-photos/dum.jpg"
        alt="Foto de perfil"
        className="w-full h-full object-cover rounded-full"
        fetchPriority="high"
      />
    </div>
  );
};

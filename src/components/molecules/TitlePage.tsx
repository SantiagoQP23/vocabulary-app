interface TitlePageProps {
  name: string;
}
export const TitlePage = ({ name }: TitlePageProps) => {
  return (
    <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
      {name}
    </h2>
  );
};

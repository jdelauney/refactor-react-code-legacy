type UsefulLinkCardProps = {
  title: string;
  description: string;
};
export const UsefulLinkCard = ({ title, description }: UsefulLinkCardProps) => {
  return (
    <div
      className={
        'cursor-pointer transform-gpu transition-transform p-2 relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 shadow-lg hover:scale-105'
      }
    >
      <div className={'bg-blue-600 text-center text-white text-xl mb-2'}>{title}</div>
      <p className={'mb-0'}>{description}</p>
    </div>
  );
};

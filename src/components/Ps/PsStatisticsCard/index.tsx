type PsStatisticsCard = {
  title: string;
  count: number;
  description?: string;
};

const PsStatisticsCard = ({ title, count, description }: PsStatisticsCard) => {
  return (
    <div className="flex aspect-square w-[230px] flex-col items-center justify-center gap-3 rounded-xl bg-blue">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <p className="text-xl text-white">{count}</p>
    </div>
  );
};

export default PsStatisticsCard;

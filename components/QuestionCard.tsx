type Props = {
  question: any;
  selected: string;
  onSelect: (value: string) => void;
};

export default function QuestionCard({
  question,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="card p-8">

      <h2 className="text-3xl font-bold leading-relaxed">
        {question.question}
      </h2>

      <div className="mt-10 space-y-4">

        {question.options.map((option: string) => (

          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`w-full text-left p-5 rounded-2xl border transition ${
              selected === option
                ? "bg-blue-600 border-blue-500"
                : "border-slate-700 hover:border-blue-500"
            }`}
          >
            {option}
          </button>

        ))}

      </div>

    </div>
  );
}
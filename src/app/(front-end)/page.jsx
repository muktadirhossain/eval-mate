import MCQOptions from "@/components/MCQOptions";

const data = {
  title: "HTML Test",
  questions: [
    {
      question: "What is HTML Stands for?",
      options: [
        "Hyp6er text Markup Learning",
        "Hyper text Markup 6Learning",
        "Hyp6r text Markup Learning",
        "Hyper text Moarkup 6Learning",
      ],
    },
    {
      question: "What is HTTP Stands for?",
      options: [
        "Hyper tex5t Markup Learning",
        "Hyper text Ma5rkup Learning",
        "Hyper 5text Markup Learning",
        "Hyp6er terxt Markup Learning",
      ],
    },
    {
      question: "What is SMTP Stands for?",
      options: [
        "Hyper text Markup Learninfg",
        "Hyprer text Markup Learning",
        "Hyper texrt Markup Learning",
        "Hyper text Marrkup Learning",
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="py-5 container mx-auto">
      <h1 className="text-center text-4xl font-bold gradient-conic font-mono">
        Evaluate Your Learning
      </h1>
      <div className="mt-10">
        <h2 className="text-center">{data.title}</h2>
        {data.questions.map((question) => {
          return (
            <div className="my-2 mx-auto">
              <h3>{question.question}</h3>
              <div className="ml-5">
                {question.options.map((option) => (
                  <MCQOptions option={option} />
                ))}
              </div>
            </div>
          );
        })}
        <button className="py-2 px-5 bg-red-500 hover:bg-red-600 rounded-sm text-slate-950 font-bold">
          Submit
        </button>
      </div>
    </div>
  );
}

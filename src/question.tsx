import {type FC} from "react";

interface Props {
    question: string;
    options: string[];
    onSelect: (option: string) => void;
    selected: string | null;
    error: string;
}


const QuestionComponent: FC<Props> = ({
                                          question,
                                          options,
                                          onSelect,
    error,
    selected
                                      }) => {


    return (
        <div className="max-w-xl rounded-xl border border-contrast p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-contrast-text text-center">
                {question}
            </h2>

            <div className="space-y-3">
                {options.map((option, index) => {
                    const isSelected = selected === option;

                    return (
                        <button
                            key={index}
                            onClick={() => onSelect(option)}
                            className={`w-full rounded-lg border px-4 py-3 text-left transition
                ${
                                isSelected
                                    ? "border-blue-500 bg-blue-50 text-blue-700"
                                    : "border-contrast hover:bg-gray-50"
                            }`}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            <p className='text-center pt-4 text-lg text-contrast'>{error}</p>
        </div>
    );
}

export default QuestionComponent;
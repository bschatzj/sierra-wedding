import {type FC} from "react";
import Dog1 from "./assets/dog1.jpg";
import Dog2 from "./assets/bog2.jpg";
import Dog3 from "./assets/dog3.jpg";
import Dog4 from "./assets/dog4.jpg";
interface Props {
    question: string;
    options: string[];
    onSelect: (option: string) => void;
    selected: string | null;
    error: string;
    type?: string;
}


const QuestionComponent: FC<Props> = ({
                                          question,
                                          options,
                                          onSelect,
    type,
    error,
    selected
                                      }) => {


    return (
        <div className="max-w-xl rounded-xl border border-contrast p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-contrast-text text-center">
                {question}
            </h2>
            {type === "image" && (
                <div className='bg-gray-100 h-[300px] mb-4 w-full flex flex-wrap'>

                    <div className='w-1/2 h-1/2'>  <p className='absolute bg-black text-amber-50 p-2'>a)</p><img
                    src={Dog1}
                    alt="Question visual"
                    className="w-full h-full p-2"
                />

                    </div>
                    <div className='w-1/2 h-1/2'>
                        <p className='absolute bg-black text-amber-50 p-2'>b)</p><img
                        src={Dog2}
                        alt="Question visual"
                        className="w-full h-full p-2"
                    />

                    </div>
                    <div className='w-1/2 h-1/2'>      <p className='absolute bg-black text-amber-50 p-2'>c)</p>
                        <img
                        src={Dog3}
                        alt="Question visual"
                        className="w-full h-full p-2"
                    />
                    </div>
                    <div className='w-1/2 h-1/2'>        <p className='absolute bg-black text-amber-50 p-2'>d)</p>
                        <img
                        src={Dog4}
                        alt="Question visual"
                        className="w-full h-full p-2"
                    />
                    </div>
                </div>
            )}

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
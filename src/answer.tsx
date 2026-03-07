import { CheckCircle, XCircle } from "lucide-react";
import {type FC, useEffect} from "react";
import useLocalStorage from "./local-storage-hook.ts";

interface Props {
    question: string;
    userAnswer: string;
    correctAnswer: string;
    answerText?: string;
    imageUrl?: string;
    explanation?: string;
    questionId: string;
}
const AnswerReviewCard: FC<Props> = ({
                                             userAnswer,
                                             correctAnswer,
                                             answerText,
                                             imageUrl,
                                             explanation,
    questionId
                                         }) => {
    const isCorrect = userAnswer === correctAnswer;

    const [answer, setCorrectness] = useLocalStorage(questionId!, isCorrect.toString());



    useEffect(() => {
        if(answer !== null && userAnswer !== 'null') {
            setCorrectness(isCorrect.toString());
        }
    }, [answer, isCorrect, setCorrectness, userAnswer]);



    return (
        <div className="max-w-xl mx-auto rounded-2xl border border-gray-200 shadow-sm bg-white p-6 space-y-4">
            {userAnswer !== 'null' && <div className="flex items-center gap-2">
                {isCorrect ? (
                    <CheckCircle className="text-green-500" />
                ) : (
                    <XCircle className="text-red-500" />
                )}
                <h2 className="text-xl font-semibold">
                    {isCorrect ? "Correct Answer" : "Incorrect Answer"}
                </h2>
            </div>}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Answer visual"
                    className="w-full rounded-xl object-cover"
                />
            )}

            {userAnswer !== 'null' && <div className="space-y-1">
                <p className="text-sm text-gray-500">Your Answer</p>
                <p className="font-medium">{userAnswer}</p>
            </div>}

            {!isCorrect && (
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">Correct Answer</p>
                    <p className="font-medium text-green-600">{correctAnswer}</p>
                </div>
            )}

            {answerText && (
                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Answer</p>
                    <p className="text-base">{answerText}</p>
                </div>
            )}

            {explanation && (
                <div className="border-t pt-4">
                    <p className="text-sm font-semibold mb-1">Explanation</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {explanation}
                    </p>
                </div>
            )}
        </div>
    );
}

export default AnswerReviewCard;
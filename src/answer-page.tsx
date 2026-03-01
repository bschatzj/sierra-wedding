import Answer from "./answer.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {QuestionList} from "./question-list.ts";

export default function Quiz() {


    const {page, answer} = useParams();

    const currentQuestion = QuestionList[parseInt(page as string) - 1];

    const navigate = useNavigate();

    const handleNavigation = () => {
        if(parseInt(page as string) === QuestionList.length){
            navigate('/submit');
            return;
        }
        navigate(`/quiz/${parseInt(page as string) + 1}`);
    }


    return (
        <div className='flex flex-col items-center p-10 justify-center bg-background min-h-screen'>
            <Answer
                question={currentQuestion.question}
imageUrl={currentQuestion.imageUrl}
                userAnswer={answer!}
                correctAnswer={currentQuestion.answer!}
                explanation={currentQuestion.explanation}
                questionId={page!}

            />
            <button onClick={handleNavigation} className='mt-10 border-1 border-aqua-200 py-2 w-full rounded-full text-contrast-text text-bold text-lg hover:bg-amber-50/50 active:bg-amber-50/50 ' >Next</button>
        </div>
    );
}
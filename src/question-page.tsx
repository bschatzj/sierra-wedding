import MultipleChoiceQuestion from "./question.tsx";
import {QuestionList} from "./question-list.ts";
import { useParams, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import useLocalStorage from "./local-storage-hook.ts";
export default function Quiz() {


    const {page } = useParams();

    const currentQuestion = QuestionList[parseInt(page as string) - 1];

    const [error, setError] = useState<string>("");
    const [selected, setSelected] = useState<null | string>(null);
    const [answer] = useLocalStorage(page!, "")

    const handleSelect = (option: string ) => {
        setError("");
        setSelected(option);
    };

    useEffect(() => {
        if(answer){
            navigate(`/quiz/${parseInt(page as string)}/answer/${selected}`)
        }
    }, []);

    const navigate = useNavigate();

    const handleNavigation = () => {
        if(selected){
        navigate(`/quiz/${parseInt(page as string)}/answer/${selected}`);}
        else{
            setError("Please select an answer before proceeding.");
        }
    };
    return (
        <div className='flex flex-col items-center p-10 justify-center bg-background min-h-screen'>
        <MultipleChoiceQuestion
            question={currentQuestion.question}
            options={currentQuestion.options}
            onSelect={(answer: string) => handleSelect(answer)}
            error={error}
            selected={selected}
        />
      <button onClick={() => handleNavigation() } className='mt-10 border-1 border-aqua-200 py-2 w-full rounded-full text-contrast-text text-bold text-lg hover:bg-amber-50/50 active:bg-amber-50/50 ' >Next</button>

        </div>
    );
}
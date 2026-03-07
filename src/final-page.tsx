import {useCallback, useEffect, useState} from "react";
import useLocalStorage from "./local-storage-hook.ts";

const SubmitPage = () => {
    const [trueCount, setTrueCount] = useState(0);
    const [name, setName] = useState("");
    const [tiebreaker, setTiebreaker] = useState("");
    const [submitted, setSubmitted] = useLocalStorage("submitted", "false");

    useEffect(() => {
        let count = 0;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key as string);

            if (value!.toString() === '"true"') {
                count++;
            }
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        return setTrueCount(count);
    }, []);

    const percentage = (trueCount / localStorage.length) * 100;
    const displayScore = Math.round(percentage);
    const correct = trueCount;
    const total = localStorage.length;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formURL =
            "https://docs.google.com/forms/d/e/1FAIpQLSeHzBtzRneQc2GIFD0bMH2FbwL6ZlddhRWUvMjd2T1yAJ3ZeQ/formResponse";

        const formData = new FormData();
        formData.append("entry.1070326341", name);
        formData.append("entry.26786542", tiebreaker);
        formData.append("entry.77133912", trueCount.toString());

        await fetch(formURL, {
            method: "POST",
            mode: "no-cors",
            body: formData,
        });

        setSubmitted("true");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 to-green-200 p-6">
            <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg w-full text-center space-y-6">

                <h1 className="text-4xl font-bold text-gray-800">
                    Crushed it!
                </h1>

                <p className="text-gray-500 text-lg">
                    {correct} / {total} correct
                </p>
                {submitted !== 'true' ? <> <p className="text-xl font-bold text-gray-800">
                    Tie Breaker!!!
                </p>
                <p>
                    If you add the number of letters in Daksh and Sierra's middle names. Multiply that by the distance in miles between their first address together and their current address. Divide that number by the total years Daksh and Sierra were in college. Closest to correct number will win the tie breaker!
                </p>
                <input placeholder='Player name' onChange={(e) => {setName(e.target.value)}} className='p-1 border-1 rounded-lg w-full' />
                <input placeholder='Guess' onChange={(e) => {setTiebreaker(e.target.value)}} className='p-1 border-1 rounded-lg w-full' type='number'/>
                <button className='mt-4 border-1 border-aqua-200 py-2 w-full rounded-full text-contrast-text text-bold text-lg ' onClick={handleSubmit} >Submit</button>
                </> : <p className="text-gray-500 text-lg">We'll let you know how you did!</p>}

            <div className="text-3xl animate-bounce space-x-2">
                     🎊 🧖‍♀️ 🧖‍♂️ 🎊
                </div>

            </div>
        </div>
    );

}


export default SubmitPage
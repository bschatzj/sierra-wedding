import {useEffect, useState} from "react";

const SubmitPage = () => {
    const [trueCount, setTrueCount] = useState(0);

    useEffect(() => {
        let count = 0;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key as string);

            if (value!.toString() === '"true"') {
                console.log("HEre")
                count++;
            }
        }

        setTrueCount(count);
    }, []);

    return (
        <div>
            <p>Answers correct {trueCount}</p>
        </div>
    )

}


export default SubmitPage
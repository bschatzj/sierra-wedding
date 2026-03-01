import {Link} from "react-router-dom";

const Landing =  () => {

    return (<div className='scroll-smooth'>
<div className="w-full h-screen bg-fixed bg-cover bg-center flex justify-center items-end"
     style={{backgroundImage: "url('https://images.zola.com/8c3d9d38-7cd2-4ac8-9368-655bad31a6c8?w=1000')", backgroundPosition: "left center"}}>

    <div className='flex flex-col justify-center'>
        <h1 className="text-white opacity-80 drop-shadow-md text-4xl italic font-bold pb-4">Daksh & Sierra</h1>
        <h2 className=" text-white opacity-80 drop-shadow-md text-2xl italic font-bold pb-6 text-center">Wedding Day Quiz</h2>

    </div>
</div>

<div id='quiz-section' className="p-10 space-y-8">
    <h1 className='text-sky-900 text-3xl underline text-center'> How to play</h1>
    <p className='text-gray-800 text-xl'>Daksh and Sierra wanted to have a little fun at the wedding and see how well their guests know them. They created a quiz of 15 questions to find out! Answer the questions and learn a bit more about their relationship as you go. Enter your email at the end and you could win a small prize if you got the most correct.</p>
    <Link to="/quiz/1"><button className='mt-4 border-1 border-aqua-200 py-2 w-full rounded-full text-contrast-text text-bold text-lg '>Lets go!</button></Link>
</div>
</div>)}

export default Landing
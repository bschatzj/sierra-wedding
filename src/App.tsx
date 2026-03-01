
import './App.css'
import Landing from "./landing.tsx";
import AnswerPage from "./answer-page.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./question-page.tsx";
import SubmitPage from "./final-page.tsx";

function App() {

  return (
      <div className="h-screen w-screen overflow-scroll">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quiz/:page" element={<Quiz />} />
              <Route path="/quiz/:page/answer/:answer" element={<AnswerPage />} />
              <Route  path='/submit' element={<SubmitPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About1 from "./Components/Routes/About1";
import Courses1 from "./Components/Routes/Courses1";
import Team1 from "./Components/Routes/Team1";
import Testimonial1 from "./Components/Routes/Testimonial1";
import Contact1 from "./Components/Routes/Contact1";
import ErrorPage from "./Components/Pages/ErrorPage";
import Sign from "./Components/Pages/Sign";
import SignUp from "./Components/Pages/Register";
import Javaprog from "./Components/Course/Javaprog";
import Dsa from "./Components/Course/Dsa";
import Mern from "./Components/Course/Mern";
import Fullstack from "./Components/Course/Fullstack";
import Programming from "./Components/Course/Programming";
import ShowBook from "./Components/Ebook/ShowBook";
import ByteBridgeAssistant from "./Components/Ebook/BotpressChatbot";
import Reactjs from "./Components/Course/Reactjs";
import Express from "./Components/Course/Express";
import Nodejs from "./Components/Course/Nodejs";
import Mongodb from "./Components/Course/Mongodb";
import Mysql from "./Components/Course/Mysql";
import Javascript from "./Components/Course/Javascript";
import Html from "./Components/Course/Html";
import Css from "./Components/Course/Css";
import Advjava from "./Components/Course/Advjava";
import Test from "./Components/Pages/Test";
import Profile from "./Components/Pages/Profile";
import Feedback from "./Components/Pages/Feedback";
import FeedbackAll from "./Components/Pages/FeedbackAll";
import QuizPage from "./Components/Quiz/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/courses" element={<Courses1 />} />
        <Route path="/team" element={<Team1 />} />
        <Route path="/testimonial" element={<Testimonial1 />} />
        <Route path="/contact" element={<Contact1 />} />
        <Route path="/error" element={<ErrorPage />} />

        {/* Auth Pages */}
        <Route path="/signin" element={<Sign />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />

        {/* Test Pages */}
        <Route path="/test" element={<Test />} />
        <Route path="/test/:quizId" element={<QuizPage />} />

        {/* Course Pages */}
        <Route path="/courses/java" element={<Javaprog />} />
        <Route path="/courses/dsa" element={<Dsa />} />
        <Route path="/courses/mern" element={<Mern />} />
        <Route path="/courses/mern/nodejs" element={<Nodejs />} />
        <Route path="/courses/mern/express" element={<Express />} />
        <Route path="/courses/mern/react" element={<Reactjs />} />
        <Route path="/courses/mern/mongodb" element={<Mongodb />} />

        <Route path="/courses/fullstack" element={<Fullstack />} />
        <Route path="/courses/fullstack/sql" element={<Mysql />} />
        <Route path="/courses/fullstack/nodejs" element={<Nodejs />} />
        <Route path="/courses/fullstack/express" element={<Express />} />
        <Route path="/courses/fullstack/react" element={<Reactjs />} />
        <Route path="/courses/fullstack/mongodb" element={<Mongodb />} />
        <Route path="/courses/fullstack/javascript" element={<Javascript />} />
        <Route path="/courses/fullstack/html" element={<Html />} />
        <Route path="/courses/fullstack/css" element={<Css />} />

        <Route path="/courses/programming" element={<Programming />} />
        <Route path="/courses/programming/java" element={<Javaprog />} />
        <Route path="/courses/programming/advJava" element={<Advjava />} />
        <Route path="/courses/programming/javascript" element={<Javascript />} />

        {/* Library & Feedback */}
        <Route path="/library" element={<ShowBook />} />
        <Route path="/feedback" element={<FeedbackAll />} />

        {/* 404 Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* Chatbot */}
      <ByteBridgeAssistant />
    </BrowserRouter>
  );
}

export default App;

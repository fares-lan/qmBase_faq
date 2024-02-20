import "./App.css";
import Topbar from "./header/topbar";
import Searchbar from "./searchbar/searchbar";
import QuestionsSection from "./body/questions_section";
import AddQuestionAnswerForm from "./footer/addQuestionAnswerForm";

function App() {
  return (
    <>
      <Topbar />
      <Searchbar />
      <QuestionsSection />
      <AddQuestionAnswerForm />
    </>
  );
}

export default App;

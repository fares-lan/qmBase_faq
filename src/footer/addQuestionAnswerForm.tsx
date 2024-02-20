import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./addQuestionAnswerFrom.css";

function AddQuestionAnswerForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [tags, setTags] = useState("");

  function generateRandomId() {
    return Math.floor(Math.random() * 55);
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const randomId = generateRandomId();

    const data = {
      Id: randomId,
      Question: question,
      Answer: answer,
      Tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
    };

    try {
      const api_key =
        "https://qmbasefunctions.azurewebsites.net/api/questions?code=WNV11-fsFklJ7O96AQasQDNnIBlDvm4cTINn-AeL7WLuAzFuxVWGsg==";

      const response = await fetch(api_key, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("Response =>", responseData);

      if (response.status == 200) {
        window.alert("Succes");
      } else if (response.status != 200) {
        window.alert("Error");
      }

      setQuestion("");
      setAnswer("");
      setTags("");
    } catch (error) {
      console.error("Error => ", error);
    }
  };

  return (
    <footer className="footer-container">
      <Form className="add-question-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formQuestion">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your question here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formAnswer">
          <Form.Label>Answer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the answer here"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tags, separated by commas"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </footer>
  );
}

export default AddQuestionAnswerForm;

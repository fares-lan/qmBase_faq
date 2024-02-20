import useSWR from "swr";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QuestionItem } from "../dataModel/QuestionItem";
import "./questions_section.css";

export default function QuestionsSection() {
  const api_key =
    "https://qmbasefunctions.azurewebsites.net/api/questions?code=Y5DGbEq3YHjpTKgrwq9czVdm7ZxR8zy26Z_yNh8q4DFKAzFudvB65w==";

  // Use SWR for data fetching
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR<QuestionItem[]>(api_key, fetcher);

  if (error) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;

  // return group of questions and answers into pairs
  const pairs: QuestionItem[][] = [];
  if (data) {
    for (let i = 0; i < data.length - 1; i += 2) {
      const pair: QuestionItem[] = [data[i]];
      if (i + 1 < data.length) {
        pair.push(data[i + 1]);
      }
      pairs.push(pair);
    }
  }

  function filterUtils(text: string): string {
    let index = 200;
    while (text != null && text.length > 200) {
      if (text.charAt(index) == " ") {
        return text.substring(0, 200) + "...";
      }

      index--;
    }
    return text;
  }
  //use of React-Bootstrap for layout

  return (
    <div className="questions">
      <Container>
        {/* Map through pairs of questions and answers */}
        {pairs.map((pair) => (
          <Container>
            <Row>
              {/* Map through individual questions and answers */}
              {pair.map((item: QuestionItem) => (
                <Col>
                  <div>
                    <h1 className="inp">{item.question}</h1>
                    <p className="imp">{filterUtils(item.answer)}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        ))}
      </Container>
    </div>
  );
}

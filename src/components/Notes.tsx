import * as React from "react";
import Note from "../models/note.model";
import { Card, Button } from "react-bootstrap";
interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle>{note.date}</Card.Subtitle>
          <Button onClick={() => handleDelete(note.id)}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;

import React, { useState, useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Note from "../models/note.model";
interface ICreactNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreactNotes: React.FunctionComponent<ICreactNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    console.log("Click on submit");

    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      console.log("Error");

      return setError("All fields are mandatory");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
    console.log("Notes ==> ", notes);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
    (colorRef.current as HTMLInputElement).value = "#dfdfdf";
  };

  return (
    <>
      <h2>Create Notes</h2>
      {error && (
        <Alert key="danger" variant="danger">
          {error}
        </Alert>
      )}
      <Form
        className="my-3"
        // onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title for the Note"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your notes"
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="color"
            ref={colorRef}
          />
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)}>Create Note</Button>
      </Form>
    </>
  );
};

export default CreactNotes;

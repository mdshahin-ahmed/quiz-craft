import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";
import { useGetAllQuizQuery } from "../redux/features/quiz/quizApi";

export function QuizModal({ moduleId }: { moduleId: string }) {
  const [open, setOpen] = React.useState(false);

  const { data: quizzes, isLoading } = useGetAllQuizQuery(moduleId);
  console.log(quizzes);
  if (isLoading) {
    return <>Loading...</>;
  }

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        placeholder={""}
        size="sm"
        onClick={handleOpen}
        variant="gradient"
      >
        Start quiz
      </Button>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogBody placeholder={""}>
          {quizzes?.data?.map((quiz) => (
            <div>
              <p>{quiz.question}</p>
            </div>
          ))}
        </DialogBody>
      </Dialog>
    </>
  );
}

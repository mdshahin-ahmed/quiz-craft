/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useGetAllQuizQuery } from "../redux/features/quiz/quizApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentQuestionIndex } from "../redux/features/quiz/quizSlice";

export function QuizModal({ moduleId }: { moduleId: string }) {
  const [open, setOpen] = React.useState(false);

  const { data: quizzes, isLoading } = useGetAllQuizQuery(moduleId);
  console.log(quizzes);

  const { currentQuestionIndex } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

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
          {quizzes?.data?.map(
            (quiz: any, index: number) =>
              currentQuestionIndex === index && (
                <div className="">
                  <Typography placeholder={""} variant="h5">
                    {quiz.question}
                  </Typography>
                </div>
              )
          )}
          <div className="grid grid-cols-2 gap-4">
            {quizzes?.data[currentQuestionIndex]?.options.map((option: any) => (
              <Button
                variant={
                  (quizzes?.data[currentQuestionIndex]?.correctOption ===
                    option &&
                    "filled") ||
                  "outlined"
                }
                color={
                  (quizzes?.data[currentQuestionIndex]?.correctOption ===
                    option &&
                    "green") ||
                  "gray"
                }
                placeholder={""}
              >
                {option}
              </Button>
            ))}
          </div>
        </DialogBody>
        <DialogFooter placeholder={""}>
          <div>
            {currentQuestionIndex > 0 && (
              <Button
                onClick={() =>
                  dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1))
                }
                placeholder={""}
                size="sm"
                variant="gradient"
              >
                Previous
              </Button>
            )}
          </div>
          <div className="ml-4">
            {(currentQuestionIndex < quizzes?.data?.length - 1 && (
              <Button
                onClick={() =>
                  dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))
                }
                placeholder={""}
                size="sm"
                variant="gradient"
              >
                Next
              </Button>
            )) || (
              <Button placeholder={""} size="sm" variant="gradient">
                Submit
              </Button>
            )}
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}

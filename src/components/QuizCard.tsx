import { Card, CardBody } from "@material-tailwind/react";
import { ReactNode } from "react";

export function QuizCard({ children }: { children: ReactNode }) {
  return (
    <Card placeholder={""} className="mt-6 w-full">
      <CardBody placeholder={""}>{children}</CardBody>
    </Card>
  );
}

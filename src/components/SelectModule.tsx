import { Select, Option, Spinner } from "@material-tailwind/react";
import { useAppDispatch } from "../redux/hooks";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";
import { useGetAllModulesQuery } from "../redux/api/baseApi";

export function SelectModule() {
  const dispatch = useAppDispatch();
  const { data: modules, isLoading } = useGetAllModulesQuery("");
  console.log(modules);

  if (isLoading) {
    return (
      <div className="flex justify-center h-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-72 ">
      <Select
        onChange={(value) => dispatch(setActiveStepper(1))}
        placeholder={""}
        label="Select Version"
      >
        {/* <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option> */}

        {modules?.data?.map((module) => (
          <Option value={module.id}>{module.title}</Option>
        ))}
      </Select>
    </div>
  );
}

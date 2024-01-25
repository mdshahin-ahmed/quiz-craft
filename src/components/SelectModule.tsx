import { Select, Option, Spinner } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";
import { setSelectedModule } from "../redux/features/module/moduleSlice";
import { useGetAllModulesQuery } from "../redux/features/module/moduleApi";

export function SelectModule() {
  const dispatch = useAppDispatch();
  const { data: modules, isLoading } = useGetAllModulesQuery("");
  const { moduleId } = useAppSelector((state) => state.module);

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
        value={moduleId}
        onChange={(value) => {
          const moduleTitle = modules.data.find(
            (module) => module._id === value
          ).title;
          console.log(moduleTitle);

          dispatch(setSelectedModule({ moduleTitle, moduleId: value }));
          dispatch(setActiveStepper(1));
        }}
        placeholder={""}
        label="Select Version"
      >
        {modules?.data?.map((module) => (
          <Option value={module._id}>{module.title}</Option>
        ))}
      </Select>
    </div>
  );
}

"use client";

import { usePagination } from "@/lib/contexts/PaginationContext";
import { ButtonsGrid } from "@/lib/components/common/ButtonsGrid";
import { UseFormRegister } from "react-hook-form/dist/types/form";

type ActivityPickerProps = {
  register: UseFormRegister<any>;
};

export const ActivityPicker = (props: ActivityPickerProps) => {
  const { data } = usePagination();

  return (
    <ButtonsGrid>
      {data.map((a, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`activity-${index}`}
            value={a}
            className="radio-input"
            {...props.register("activity", { required: true })}
          />
          <label htmlFor={`activity-${index}`} className="radio-label">
            {a}
          </label>
        </div>
      ))}
    </ButtonsGrid>
  );
};

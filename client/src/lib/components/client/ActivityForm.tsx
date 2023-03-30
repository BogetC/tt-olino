"use client";

import { getActivity } from "@/lib/utils/activities";
import { Activity } from "@/lib/models/Activity";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { FormResult } from "@/lib/components/common/FormResult";
import { useRouter } from "next/navigation";
import { PaginationContextProvider } from "@/lib/contexts/PaginationContext";
import { ButtonsGrid } from "@/lib/components/common/ButtonsGrid";
import { ActivityPicker } from "@/lib/components/client/ActivityPicker";

type ActivityFormProps = {
  sector: string;
  category: string;
  activities: Activity[];
};

type ActivityFormData = {
  activity: string;
};

export const ActivityForm = (props: ActivityFormProps) => {
  const { activities, sector, category } = props;
  const { push } = useRouter();

  const [activity, setActivity] = useState<string | undefined>(undefined);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ActivityFormData>();

  const onSubmit = (data: ActivityFormData) => {
    if (isValid) {
      setActivity(data.activity);
    }
  };

  useEffect(() => {
    if (activity) {
      reset();
    }
  }, [activity]);

  if (activity) {
    return (
      <>
        <h2 className="text-center">Félicitations!</h2>
        <FormResult sector={sector} category={category} activity={activity} />
      </>
    );
  }

  return (
    <div className="fade">
      <h2 className="text-center">
        Selectionner votre activité dans la catégorie{" "}
        <span className="text-primary-light">{category}</span>
      </h2>
      <form className="flex-col-center gap-6" onSubmit={handleSubmit(onSubmit)}>
        <PaginationContextProvider
          data={getActivity(activities, sector, category)}
          maxElementPerPage={9}
        >
          <ActivityPicker register={register} />
        </PaginationContextProvider>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="button button_actions button_actions__inverted"
            onClick={() => push(`/devis?secteur=${sector}`)}
          >
            <span>Revenir aux choix d&apos;une catégorie</span>
          </button>

          <button
            type="submit"
            className={classNames("button button_actions button_success", {
              disabled: !isValid,
            })}
            disabled={!isValid}
          >
            <span>Accéder au devis</span>
          </button>
        </div>
      </form>
    </div>
  );
};

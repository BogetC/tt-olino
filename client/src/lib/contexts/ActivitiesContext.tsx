"use client";

import React, { createContext, ReactElement, useContext } from "react";
import { Activity } from "@/lib/models/Activity";

interface IActivitiesContextInterface {
  readonly activities: Activity[];
}

const ActivitiesContextDefaultImpl: IActivitiesContextInterface = {
  activities: [],
};

const ActivitiesContext = createContext(ActivitiesContextDefaultImpl);

type ActivitiesContextProps = {
  activities: Activity[];
  children: ReactElement | ReactElement[];
};

export const ActivitiesContextProvider = (props: ActivitiesContextProps) => {
  const { activities, children } = props;
  return (
    <ActivitiesContext.Provider
      value={{
        activities: activities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);

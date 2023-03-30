"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCategories, getSectors } from "@/lib/utils/activities";
import { useActivities } from "@/lib/contexts/ActivitiesContext";
import { ActivityForm } from "@/lib/components/client/ActivityForm";
import { PaginationContextProvider } from "@/lib/contexts/PaginationContext";
import { SectorPicker } from "@/lib/components/client/SectorPicker";
import { CategoryPicker } from "@/lib/components/client/CategoryPicker";

type ActivityPickerState = {
  sector?: string;
  category?: string;
};

export const ActivitiesList = () => {
  const searchParams = useSearchParams();
  const sectorParams = searchParams.get("secteur");
  const categoryParams = searchParams.get("catégorie");
  const { push } = useRouter();

  const { activities } = useActivities();
  const sectors = getSectors(activities);

  const [{ sector, category }, setState] = useState<ActivityPickerState>({
    sector: undefined,
    category: undefined,
  });

  useEffect(() => {
    if (sectorParams && !sectors.some((s) => s === sectorParams)) {
      push("/devis");
      return;
    }

    if (categoryParams && !sectorParams) {
      push("/devis");
      return;
    }

    if (
      sectorParams &&
      categoryParams &&
      !getCategories(activities, sectorParams).some((c) => c === categoryParams)
    ) {
      push(`/devis?secteur=${sectorParams}`);
      return;
    }

    if (sectorParams && categoryParams) {
      setState({ sector: sectorParams, category: categoryParams });
    } else if (sectorParams && !categoryParams) {
      setState({ sector: sectorParams, category: undefined });
    } else {
      setState({ sector: undefined, category: undefined });
    }
  }, [sectorParams, categoryParams]);

  return (
    <div className="ctn">
      {!sector && !category && (
        <div className="fade">
          <h2 className="text-center">
            Selectionner un secteur d&apos;activité
          </h2>
          <PaginationContextProvider data={sectors} maxElementPerPage={9}>
            <SectorPicker />
          </PaginationContextProvider>
        </div>
      )}

      {sector && !category && (
        <div className="fade">
          <h2 className="text-center">
            Selectionner une catégorie du secteur{" "}
            <span className="text-primary-light">{sector}</span>
          </h2>

          <div className="flex-col-center gap-6">
            <PaginationContextProvider
              data={getCategories(activities, sector)}
              maxElementPerPage={9}
            >
              <CategoryPicker sector={sector} />
            </PaginationContextProvider>

            <button
              type="button"
              className="button button_actions button_actions__inverted"
              onClick={() => push("/devis")}
            >
              <span>Choisir un autre secteur d&apos;activités</span>
            </button>
          </div>
        </div>
      )}

      {sector && category && (
        <ActivityForm
          activities={activities}
          sector={sector}
          category={category}
        />
      )}
    </div>
  );
};

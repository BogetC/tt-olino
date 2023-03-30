"use client";

import { usePagination } from "@/lib/contexts/PaginationContext";
import { ButtonsGrid } from "@/lib/components/common/ButtonsGrid";
import { NavigationButton } from "@/lib/components/client/NavigationButton";

type CategoryPickerProps = {
  sector: string;
};

export const CategoryPicker = (props: CategoryPickerProps) => {
  const { data } = usePagination();

  return (
    <ButtonsGrid>
      {data.map((c, index) => (
        <NavigationButton
          key={`${c}-${index}`}
          href={`/devis?secteur=${props.sector}&catégorie=${c}`}
        >
          {c}
        </NavigationButton>
      ))}
    </ButtonsGrid>
  );
};

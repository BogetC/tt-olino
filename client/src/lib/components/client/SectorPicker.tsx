"use client";

import { usePagination } from "@/lib/contexts/PaginationContext";
import { NavigationButton } from "@/lib/components/client/NavigationButton";
import { ButtonsGrid } from "@/lib/components/common/ButtonsGrid";

export const SectorPicker = () => {
  const { data } = usePagination();

  return (
    <ButtonsGrid>
      {data.map((s, index) => (
        <NavigationButton key={`${s}-${index}`} href={`/devis?secteur=${s}`}>
          {s}
        </NavigationButton>
      ))}
    </ButtonsGrid>
  );
};

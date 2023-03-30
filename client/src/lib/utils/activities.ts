import { Activity } from "@/lib/models/Activity";

const removeDuplicates = (data: string[]) => {
  return data.sort().filter((e, i, a) => !i || e != a[i - 1]);
};

export const getSectors = (activities: Activity[]) => {
  const sectors = activities.map((a) => a.sector);
  return removeDuplicates(sectors);
};

export const getCategory = (activities: Activity[], sector: string) => {
  const filtered = activities.filter((a) => a.sector === sector);
  const categories = filtered.map((f) => f.category);
  return removeDuplicates(categories);
};

export const getActivity = (
  activities: Activity[],
  sector: string,
  category: string
) => {
  const filtered = activities.filter(
    (a) => a.sector === sector && a.category === category
  );
  const data = filtered.map((f) => f.name);
  return removeDuplicates(data);
};

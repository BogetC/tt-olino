import path from "path";
import { promises as fs } from "fs";
import { Activity } from "../models/Activity";

export const getActivities = async (): Promise<Activity[]> => {
  const directory = path.join(process.cwd(), "src");
  const tsv = await fs.readFile(directory + "/data.tsv", "utf8");
  const arrays = tsv.split("\n").map((line) => line.split("\t"));

  arrays.shift();

  const activities: Activity[] = [];

  arrays.forEach((e) => {
    activities.push({
      sector: e[0],
      category: e[1],
      name: e[2],
    });
  });

  return activities;
};

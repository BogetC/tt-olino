import { getSectors } from "@/lib/utils/activities";
import { Activity } from "@/lib/models/Activity";
import { Metadata } from "next";
import { ActivitiesContextProvider } from "@/lib/contexts/ActivitiesContext";
import { ActivitiesList } from "@/lib/components/client/ActivitiesList";

const API_URL = process.env.API_URL ?? "http://localhost:5000";

const getActivities = async (): Promise<Activity[]> => {
  const res = await fetch(`${API_URL}/api/activities`, {
    cache: "force-cache",
  });
  return await res.json();
};

export async function generateMetadata(): Promise<Metadata> {
  const activities = await getActivities();
  const sectors = getSectors(activities);
  return {
    title: "Olino - Secteur d'activité",
    description: `Créer un devis personalisé en fonction de votre secteur d'activité, notre offre est vaste alors n'hésitez pas: ${sectors.join(
      ", "
    )}`,
  };
}

export default async function Page() {
  const activities = await getActivities();
  return (
    <main>
      <ActivitiesContextProvider activities={activities}>
        <ActivitiesList />
      </ActivitiesContextProvider>
    </main>
  );
}

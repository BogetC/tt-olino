type FormResultProps = {
  sector: string;
  category: string;
  activity: string;
};

export const FormResult = (props: FormResultProps) => {
  const { sector, category, activity } = props;
  return (
    <div>
      <h3>Résumé de la demande</h3>

      <ul className="mb-4">
        <li>
          <span className="font-bold">Secteur:</span> {sector}
        </li>
        <li>
          <span className="font-bold">Categorie</span>: {category}
        </li>
        <li>
          <span className="font-bold">Activité</span>: {activity}
        </li>
      </ul>

      <p>
        Vous avez terminé le procesus, malheuresement je ne suis qu&apos;un
        prétendant au poste à pourvoir chez Olino et cela faisait partie de mon
        test technique.
      </p>

      <p>
        Pour accéder à un service de qualité, je vous invite à suivre les
        démarches de Olino sur{" "}
        <a href="https://olino.fr" className="text-primary-light">
          le site officiel
        </a>
        .
      </p>

      <p>
        J&apos;espère que vous avez apprécié l&apos;expérience et je serais ravi
        de vous aidez une prochaine fois si ce test convaint la direction de
        Olino.
      </p>

      <p>En attendant, n&apos;hésitez pas a recommencer !</p>

      <a href="/devis" className="button button_actions max-w-max mt-4">
        Recommencer
      </a>
    </div>
  );
};

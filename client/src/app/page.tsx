export default async function Page() {
  return (
    <main>
      <div className="ctn hero hero__primary">
        <h1 className="main-title text-center">
          Trouver l&apos;assurance faite pour vous !
        </h1>
      </div>

      <div className="ctn flex-col-center">
        <h2>Gagnez du temps et créer un devis personalisé en 3 minutes</h2>

        <a href="/devis" className="button button_actions">
          Commencer gratuitement
        </a>
      </div>
    </main>
  );
}

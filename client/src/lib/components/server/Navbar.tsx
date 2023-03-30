export const Navbar = () => {
  return (
    <div className="ctn bg-primary flex items-center justify-between">
      <a href="/" className="block w-[145px]">
        <img
          src="https://uploads-ssl.webflow.com/6347da3b4b2b6127ec89b233/63516472b4760d447c977a4e_olino_footer-logo.svg"
          className="w-full h-auto"
        />
      </a>
      <a
        href="/devis"
        className="button button_actions button_actions__inverted"
      >
        Créer un devis
      </a>
    </div>
  );
};

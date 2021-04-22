import "./style.css";

export const Footer = () => {
  return (
    <footer className="mainFooter">
      Поиск работы © {new Date().getFullYear()}
    </footer>
  );
};

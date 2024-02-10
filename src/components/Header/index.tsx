import logoImg from "../Img/icon_check_64px.png";
import "./style.css";

export function Header() {
  return (
    <>
      <header className="header">
        <div className="container-header">
          <div className="logo">
            <img src={logoImg} alt="logo" />
            <div className="logo-title">
              <h1>TODO LIST</h1>
              <span>Create your list</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

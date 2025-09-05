import LinkedButton from "./components/Button";
import chinese_menu from "./assets/chinese_menu.pdf";
import english_menu from "./assets/english_menu.pdf";
import logo from "./assets/spread_logo.png";
import FileButton from "./components/FileButton";

function App() {
  return (
    <div className="h-screen w-screen bg-[#181a26] flex flex-col text-center p-16 text-slate-200 items-center">
      <img src={logo} alt="logo" className="w-[480px]" />
      <div className="flex flex-col border-1 border-red-500 justify-center gap-4 m-12">
        <FileButton text={"English Menu"} link={english_menu} />
        <FileButton text={"Chinese Menu / 中文菜单"} link={chinese_menu} />
        <LinkedButton
          text={"Interactive Menu"}
          link={`${import.meta.env.BASE_URL}/english-menu`}
        />
        <LinkedButton
          text={"Grid Menu (Instagram Style)"}
          link={`${import.meta.env.BASE_URL}/`}
        />
      </div>
    </div>
  );
}

export default App;

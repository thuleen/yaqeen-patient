import HomeAppbar from "./home";

type MenubarProps = {
  handleLogout: () => void;
};

export default function Menubar(props: MenubarProps) {
  return <HomeAppbar handleLogout={props.handleLogout} />;
}

import "./index.css";
import { DefaultButton } from "./components/Buttom";
import CardComponent from "./components/Cards";
import { SidebarNav } from "./components/Sidenav";
import { Navbar } from "./components/Navbar";
import InputComponent from "./components/Inputs";
import CheckboxComponent from "./components/Checkbox";
import ContainerComponent from "./components/Container";
import TableComponent from "./components/Table";
import TypoComponent from "./components/Typo";
import LogoComponent from "./components/Logo";
import { Image as ImageComponent } from "./components/Image";
import DropdownComponent from "./components/Dropdown";

export type {
    ButtonBaseColor,
    ButtonProps,
    ButtonSize,
    ButtonVariant,
} from "./components/Buttom";
export type { CheckboxProps } from "./components/Checkbox";
export type { CardProps } from "./components/Cards";
export type { SidebarNavProps } from "./components/Sidenav";
export type { NavbarProps } from "./components/Navbar";
export type { InputProps } from "./components/Inputs";
export type { LogoProps } from "./components/Logo";
export type { ImageProps } from "./components/Image";
export type { DropdownProps } from "./components/Dropdown";
export type { TableColumn, TableProps } from "./components/Table";
export type { TypoProps } from "./components/Typo";
export type { ContainerProps } from "./components/Container";

export const Button = DefaultButton;
export const Card = CardComponent;
export const Sidebar = SidebarNav;
export const TopNavbar = Navbar;
export const Input = InputComponent;
export const Checkbox = CheckboxComponent;
export const Table = TableComponent;
export const Typo = TypoComponent;
export const Dropdown = DropdownComponent;
export const Container = ContainerComponent;
export const Logo = LogoComponent;
export const Image = ImageComponent;
export { DefaultButton, Navbar };

const StandardBankUI = {
  Button,
  Card,
  Sidebar,
  TopNavbar,
  Input,
  Checkbox,
  Table,
  Typo,
  Dropdown,
  Container,
  Logo,
  Image,
};

export { StandardBankUI };
export default StandardBankUI;

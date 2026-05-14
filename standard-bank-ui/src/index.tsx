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
import { Section as SectionComponent } from "./components/Section";
import { Hero as HeroComponent } from "./components/Hero";

export type {
    ButtonBaseColor,
    ButtonProps,
    ButtonSize,
    ButtonStyle,
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
export type { SectionProps } from "./components/Section";
export type { HeroProps } from "./components/Hero";

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
export const Section = SectionComponent;
export const Hero = HeroComponent;
export { DefaultButton, Navbar };

//https://material.colorion.co/palette/757
export const ColorPalette = ['#F5FAF5', '#D2E9D6', '#3AB157', '#66C17B', '#97D3A2', '#B7E0BF'];

export const TextColor = '#292e34';
export const PrimaryColor = ColorPalette[2];
export const BackgroundColor = ColorPalette[1];
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
  Section,
  Hero,
};

export { StandardBankUI };
export default StandardBankUI;

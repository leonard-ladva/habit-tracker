export type Screen = "list" | "new" | "edit";

export interface ScreenProps {
  goTo: (screen: Screen) => void;
}
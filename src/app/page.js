import Landing from "./components/Landing";
import { ThemeProvider } from "./components/Hooks/useTheme";

export default function Home() {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
}

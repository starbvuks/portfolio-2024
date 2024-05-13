import Landing from "./components/Landing";
import { ThemeProvider } from "next-themes";
// import Landing2 from "@/old/Landing2";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="">
        <Landing />
      </div>
    </ThemeProvider>
  );
}

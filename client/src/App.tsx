/*
Monolithic Editorial Luxury application shell: force a dark gallery canvas so every route supports the marble atelier experience, refined contrast, and brass-accented interface language.
Guiding question: Does this choice reinforce or dilute our design philosophy?
*/

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Craft from "@/pages/Craft";
import NotFound from "@/pages/NotFound";
import ProjectDetail from "@/pages/ProjectDetail";
import ProjectPage from "@/pages/ProjectPage";
import Projects from "@/pages/Projects";
import Technology from "@/pages/Technology";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/craft" component={Craft} />
      <Route path="/technology" component={Technology} />
      <Route path="/projects/:market/:folder" component={ProjectPage} />
      <Route path="/projects/:market" component={ProjectDetail} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

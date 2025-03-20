import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import MainLayout from "./layouts/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import AcademicPrograms from "@/pages/AcademicPrograms";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/academics" component={AcademicPrograms} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

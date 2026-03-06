import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import Sitemap from "./pages/Sitemap";
import { Link } from "wouter";

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: "#00aaff", letterSpacing: "0.12em", marginBottom: "16px" }}>
          404 — NOT FOUND
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", color: "#f0f0f0", marginBottom: "16px" }}>
          Page not found
        </h1>
        <Link href="/">
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#00aaff", cursor: "pointer", letterSpacing: "0.06em" }}>
            ← BACK TO PRODUCT FEED RESEARCH
          </span>
        </Link>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles/:slug" component={ArticlePage} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path="/product-feed-technology" component={CategoryPage} />
      <Route path="/ai-visibility" component={CategoryPage} />
      <Route path="/product-feed-tools" component={CategoryPage} />
      <Route path="/ecommerce-technology" component={CategoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return <Router />;
}

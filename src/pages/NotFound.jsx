import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/common/Seo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo title="Page Not Found" path={location.pathname} />
      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="font-display text-[8rem] md:text-[10rem] gold-text leading-none">404</div>
          <h1 className="font-display text-3xl md:text-4xl text-foreground mt-2">Page not found</h1>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for has moved or never existed. Let's get you back on track.
          </p>
          <Button asChild className="mt-8 bg-gradient-gold text-primary-foreground hover:opacity-90">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default NotFound;

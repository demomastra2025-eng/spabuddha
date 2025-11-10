import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-background px-4 py-16">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center text-center space-y-6 rounded-3xl border border-border bg-card/40 p-10 shadow-spa">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Ошибка 404</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold">Страница не найдена</h1>
          <p className="mt-4 text-muted-foreground">
            Кажется, вы открыли несуществующий адрес: <span className="font-mono text-sm">{location.pathname}</span>.
            Попробуйте вернуться на главную или начните оформление сертификата заново.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="px-8">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              На главную
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8">
            <Link to="/create">
              <RefreshCw className="mr-2 h-4 w-4" />
              Создать сертификат
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

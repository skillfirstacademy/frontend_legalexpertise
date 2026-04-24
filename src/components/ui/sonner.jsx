import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-background ...",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary ...",
          cancelButton: "group-[.toast]:bg-muted ...",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
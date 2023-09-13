import { Button } from "./components/ui/button";
import { Github } from "lucide-react";
import { Separator } from "./components/ui/separator";
export function App() {
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="font-xl font-bold">AI UploadVideo</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developer by DanielMota
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button
            variant={"outline"}
            onClick={() =>
              window.open("https://github.com/danielgmota/ai-upload-video")
            }
          >
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Button } from "./components/ui/button";
import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";
export function App() {
  return (
    <div className="min-h-screen flex flex-col">
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
      <div className="flex-1 flex gap-6 p-6">
        <main className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Inclua o prompt da IA"
            />
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Resultado gerado pela IA"
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: voce pode utilizar a variavel{" "}
            <code className="text-blue-400">{"{transcription}"}</code> no seu
            prompt para adicionar o conteudo da transcrição do video
            selecionado.
          </p>
        </main>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border border-dashed flex flex-col gap-2 items-center justify-center text-muted-foreground rounded-md aspect-video cursor-pointer text-sm hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Carregar video
            </label>
            <input
              type="file"
              className="sr-only"
              id="video"
              accept="video/mp4"
            />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">
                Prompt the transcrição
              </Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras mencionadas no video separado por virgula(,)"
              />
            </div>

            <Button type="submit" className="w-full">
              <Upload className="w-4 h-4 ml-2" />
              Carregar Video
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2 ">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do Youtube</SelectItem>
                  <SelectItem value="description">
                    Descrição do Youtube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 ">
              <Label>Modelo</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-sm text-muted-foreground italic">
                Temporariamente única opção disponível
              </span>
            </div>

            <Separator />

            <div className="space-y-4 ">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-sm text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e
                sujeito a possiveis erros
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-h h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </div>
    </div>
  );
}

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Image as LucideImage, PencilLine } from "lucide-react";

const GatewayImageUploader = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center relative rounded-[5px]"
      style={{
        background: "#9A9A9A",
        backgroundImage: `url(${preview})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!file && <LucideImage size={80} className="text-[#141B34]" />}
      <Button
        size="icon"
        className="bg-[#171B20] border-2 border-[#383A3F] rounded-full absolute bottom-4 right-3"
        onClick={() => inputRef.current?.click()}
      >
        <PencilLine size={18} />
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        id="profile-upload"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default GatewayImageUploader;

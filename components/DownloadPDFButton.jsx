import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import PDFTemplate from "@/components/PDFTemplate";
import DownloadIcon from "@/components/icons/DownloadIcon";

export default function DownloadPDFButton({ recipe }) {
  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${recipe.title} Recipe.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <BlobProvider document={<PDFTemplate recipe={recipe} />}>
      {({ url, blob, error }) => {
        return url ? (
          <button onClick={() => handleDownload(url)}>
            <DownloadIcon
              size="36"
              className="inline mb-2 hover:fill-slate-600 cursor-pointer transition-all"
            />
          </button>
        ) : null;
      }}
    </BlobProvider>
  );
}

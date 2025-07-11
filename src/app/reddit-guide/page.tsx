"use client";

import Image from "next/image";
import { useEffect } from "react";

function Page() {
  useEffect(() => {
    const eocampaignScript = document.createElement("script");
    eocampaignScript.src =
      "https://eocampaign1.com/form/23e9564a-5e43-11f0-a394-c9b14d8ae113.js";
    eocampaignScript.async = true;
    eocampaignScript.dataset.form = "23e9564a-5e43-11f0-a394-c9b14d8ae113";

    const mainDiv = document.getElementById("main");
    if (mainDiv) {
      mainDiv.appendChild(eocampaignScript);
    }

    return () => {
      if (mainDiv) {
        mainDiv.removeChild(eocampaignScript);
      }
    };
  }, []);

  return (
    <div
      id="main"
      className="flex min-h-screen flex-col items-center gap-10 py-5"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col gap-3 xl:flex-row">
          <Image
            src="/dodo.jpeg"
            alt="Revenue"
            width={500}
            height={180}
            className="rounded-lg"
          />
          <Image
            src="/reddit-success.jpeg"
            alt="Reddit Success"
            width={500}
            height={180}
            className="hidden rounded-lg xl:block"
          />
        </div>
        <Image
          src="/reddit-views.png"
          alt="Reddit Views"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Page;

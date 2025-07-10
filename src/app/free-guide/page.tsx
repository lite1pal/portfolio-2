"use client";

import Image from "next/image";
import { useEffect } from "react";

function Page() {
  const size = 600;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <iframe
        src="https://subscribe-forms.beehiiv.com/f23fdfa1-52a1-4764-9189-3b797b183283"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
        style={{
          width: "800px",
          height: "340px",
          margin: 0,
          borderRadius: "0px",
          backgroundColor: "transparent",
          boxShadow: "0 0 #0000",
          maxWidth: "100%",
        }}
      />

      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-3">
          <Image
            src="/dodo.jpeg"
            alt="Revenue"
            width={size}
            height={size}
            className="rounded-lg"
          />
          <Image
            src="/reddit-success.jpeg"
            alt="Reddit Success"
            width={size}
            height={size}
            className="rounded-lg"
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

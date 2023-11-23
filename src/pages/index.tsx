import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RouterPage() {
  const router = useRouter();

  useEffect(() => {
    const { language } = window.navigator;

    if (language.toLowerCase() === "pt-br") {
      router.push("/pt-br/");
    } else {
      router.push("/en/");
    }
  });

  return;
}

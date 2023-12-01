import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import Section from "@/patterns/Section";

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

  return (
    <Section as="main" inlineStyle={{ xs: `justify-content: center;` }}>
      <Loader />
    </Section>
  );
}

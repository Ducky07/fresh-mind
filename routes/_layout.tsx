import { type PageProps } from "$fresh/server.ts";
import { Footer } from "@/components/Footer.tsx";
import { Navigation } from "@/components/Navigation.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Navigation />
      <Component />
      <Footer />
    </>
  );
}

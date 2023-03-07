import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import queryClient from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { IBM_Plex_Sans } from "next/font/google";
import Head from "next/head";
import { SWRConfig } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const fontIBMPlexSans = IBM_Plex_Sans({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
            <QueryClientProvider client={queryClient}>
                <div
                    className={`framer bg-[#F6F6F6] text-[#1A1A1A] border-[#EEEEEE] ${fontIBMPlexSans.className}`}
                >
                    <Head>
                        <title>Plataforma de Soporte — ETC LATAM</title>
                        <link rel="icon" href="/favicon.ico" />
                        <meta
                            name="description"
                            content="Plataforma de Soporte — ETC LATAM"
                        />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <section className="sticky top-0 z-10 w-full header">
                        <Header />
                    </section>

                    <section className="main">
                        <main>
                            <Component {...pageProps} />
                        </main>
                    </section>

                    <section className="footer">
                        <Footer />
                    </section>
                </div>
            </QueryClientProvider>
        </SWRConfig>
    );
}

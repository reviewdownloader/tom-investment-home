import { Footer } from "./Footer";
import { TopBar } from "./TopBar";
import Head from "next/head";
import { Header } from "./Header";
import { AppName } from "../app";

export const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>
                    {title} | {AppName}
                </title>
            </Head>
            <TopBar />
            <Header />
            {children}
            <Footer />
        </>
    );
};

import { Footer } from "./Footer";
// import { TopBar } from "./TopBar";
import Head from "next/head";
import { Header } from "./Header";
import { AppName } from "../app";

const { APP_NAME } = process.env;
export const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>
                    {title} | {AppName || APP_NAME}
                </title>
            </Head>
            {/* <TopBar /> */}
            <Header />
            {children}
            <Footer />
        </>
    );
};

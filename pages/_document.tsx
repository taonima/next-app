import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
            <Head>
                <title>blog</title>
            </Head>
            <body>
            <Main />
            <NextScript />
            <style jsx global>{` 
            /* Other global styles such as 'html, body' etc... */

            #__next {
              height: 100%;
            }
          `}</style>
            </body>
            </Html>
        );
    }
}
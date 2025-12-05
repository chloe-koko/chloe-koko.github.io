import { StrictMode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import App from './App';
import "./styles.css";

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

                <div className="w-full flex md:justify-start md:pl-8 justify-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/coconut-logo.png"
                                className="dark:invert"
                                alt="Coconut logo"
                                width={150}
                                height={100}
                                priority />
                        <b style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                            Chloe&apos;s Home Page
                        </b>
                    </Link>
                </div>
                <StrictMode>
                    <App />
                </StrictMode>
            </main>
        </div>
    )
}

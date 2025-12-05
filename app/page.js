import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Image src="/coconut-logo.png"
                        className="dark:invert"
                        alt="Coconut logo"
                        width={200}
                        height={1024 / 1536.0 * 200}
                        priority/>
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Welcome to Chloe's Website
                    </h1>
                    <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">

                        While you're here, feel free to explore various projects and games I've created,
                        including my <Link href="/tic-tac-toe"><b>Tic ❌ Tac ⭕ Toe</b></Link> game!
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                    <a
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[200px]"
                        href="https://kokona.website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={1}
                            height={16}
                        />
                        Parent Website
                    </a>
                    <a
                        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        href="/blogs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Blog
                    </a>
                </div>
            </main>
        </div>
    );
}

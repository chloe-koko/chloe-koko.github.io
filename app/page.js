import Link from "next/link";

export default function Home() {
    return (
        <main className="home-main page-container">
            <h1 className="home-title">Welcome to Chloe's Website</h1>
            <p className="home-body">
                While you're here, feel free to explore various projects and games I've created,
                including my <Link href="/tic-tac-toe"><b>Tic ❌ Tac ⭕ Toe</b></Link> game
                and the <Link href="/bridges"><b>🌉 Bridges of Königsberg</b></Link> puzzle!
            </p>
        </main>
    );
}

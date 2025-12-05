
import Link from "@node_modules/next/link";
import Image from "next/image";

export default function Blog() {
    return (
        <div className="flex flex-col items-center bg-white ">
            <div className="w-full flex md:justify-start md:pl-8 justify-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/coconut-logo.png"
                        alt="Coconut logo"
                        width={150}
                        height={100}
                        priority
                    />
                    <b style={{ color: "#222", fontSize: "1.5rem", fontWeight: 700 }}>
                        Chloe&apos;s Home Page
                    </b>
                </Link>
            </div>
            <iframe
                src="https://chloekokona.wordpress.com/blog"
                width="100%"
                height="100%"
                style={{
                    border: "none",
                    display: "block",
                    width: "100vw",
                    height: "100vh",
                }}
                title="Chloe's Blogs"
            />
        </div>
    );
}

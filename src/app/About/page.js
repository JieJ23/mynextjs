import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col">
                <div className="font-[cinzel] text-[20px]">
                    Power of the Light twin
                </div>
                <Link href={"/"} className="font-[ubuntu] text-[20px]">Go to Home page</Link>
            </main>
        </div>
    );
}

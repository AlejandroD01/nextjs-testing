"use client";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Home</h1>
            <p>this is my description</p>
            <button onClick={() => router.push("myroute")} className="bg-blue-500 text-white p-2 rounded">
                Navigate to myroute
            </button>
        </div>
    );
}

export default Home;
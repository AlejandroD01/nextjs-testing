export default function MyRoute() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">My Route</h1>
            <p data-testid="desc">This is my route</p>
            <p className="text-gray-500">This is a simple route to demonstrate the use of Next.js</p>
            <p className="text-gray-500">You can add more content here</p>
        </div>
    );
}
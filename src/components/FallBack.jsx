export default function Fallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-3 text-gray-500">
          Please refresh the page.
        </p>
      </div>
    </div>
  );
}
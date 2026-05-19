import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans h-full p-5">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-black">
        Welcome to Davinci LeadMS
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Your all-in-one lead management system.
      </p>
    </div>
  );
}

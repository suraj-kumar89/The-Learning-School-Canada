import { Suspense } from "react";
import Form from "@/SharedComponent/Form";
import Header from "@/SharedComponent/Header";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F4F6] w-full">
      <Header />
      <Suspense fallback={<div />}>
        <Form />
      </Suspense>
    </main>
  );
}
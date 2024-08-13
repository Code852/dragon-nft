import Header from "@/components/Layout/Header/Header";
import GenerateImage from "@/components/Generation/GenerateImage";
// import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <div className="flex-grow h-screen flex justify-center items-center">
        <GenerateImage />
      </div>
    </div>
  );
}

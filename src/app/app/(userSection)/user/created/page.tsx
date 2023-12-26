import CreatedList from "@/components/app/user/created/CreatedList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Created",
};

function page() {
  return <CreatedList />;
}

export default page;

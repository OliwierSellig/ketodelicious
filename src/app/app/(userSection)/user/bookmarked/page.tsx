import BookmarkedList from "@/components/app/user/bookmarked/BookmarkedList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookmarked",
};

function page() {
  return <BookmarkedList />;
}

export default page;

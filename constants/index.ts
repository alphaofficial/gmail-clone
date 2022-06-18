import { MdInbox, MdStar, MdWatchLater, MdSend } from "react-icons/md";

export const MENU_ITEMS = [
  {
    title: "Inbox",
    url: "/",
    Icon: MdInbox,
  },
  {
    title: "Starred",
    url: "/starred",
    Icon: MdStar,
  },
  {
    title: "Snoozed",
    url: "/starred",
    Icon: MdWatchLater,
  },
  {
    title: "Sent",
    url: "/starred",
    Icon: MdSend,
  },
  {
    title: "Drafts",
    url: "/starred",
    Icon: MdStar,
  },
  {
    title: "Spam",
    url: "/starred",
    Icon: MdStar,
  },
  {
    title: "Trash",
    url: "/starred",
    Icon: MdStar,
  },
  {
    title: "Categories",
    url: "/starred",
    Icon: MdStar,
    nestedLinks: {},
  },
];

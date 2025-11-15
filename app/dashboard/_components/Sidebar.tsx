"use client";

import { LuBuilding, LuCalendar, LuChartLine, LuUserRound } from "react-icons/lu";
import NavItem from "./NavItem";
import EventSearchBar from "./EventSearchBar";
import { useRouter } from "next/navigation";
import CreateEvent from "./CreateEvent";
import FormCreateNewEvent from "./FormCreateNewEvent";
import ListOfEvents from "./ListOfEvents";
import { useUser } from "@/context/UserContext";

export default function Sidebar() {
  const router = useRouter();
  const {user} = useUser();
  console.log(user)

  const handleEventSearch = (id: string) => {
    if (!id.trim()) return;
    router.push(`/dashboard/events/${id}`);
  };

  return (
<nav className="w-3/12 h-screen bg-[#F0F0F0] flex flex-col items-center py-5 gap-10">

  
  <div className="w-3/4">
    <EventSearchBar onSearch={handleEventSearch} />
  </div>

  <div className="flex flex-row justify-center items-center gap-4">
    <NavItem icon={<LuBuilding className="text-4xl" />} path="/dashboard" />
    <NavItem icon={<LuUserRound className="text-4xl" />} path={`/dashboard/users/${user?.userId}`} />
  </div>

  <div className="flex flex-row justify-center items-center gap-4">
    <NavItem icon={<LuCalendar className="text-4xl" />} path="/dashboard/events" />
    <NavItem icon={<LuChartLine className="text-4xl" />} path="/dashboard/statistics" />
  </div>

  <div className="flex flex-col gap-5 flex-grow">
    <div className="flex flex-row items-center justify-between">
      <p>Nuevo evento</p>
      <CreateEvent>
        <FormCreateNewEvent />
      </CreateEvent>
    </div>
    <ListOfEvents />
  </div>

</nav>

  );
}

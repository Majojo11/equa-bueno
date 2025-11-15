"use client";

import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { Event } from "@/entities";

export default function EventCard({ event }: { event: Event }) {
    return(
        <div className=" bg-[#F0F0F0] p-5">
            <Card className="bg-[#F0F0F0] transition-all w-[250px] h-[50px]">
            <CardHeader><b>{event.eventName}</b></CardHeader>
            </Card>
        </div>
    )
}
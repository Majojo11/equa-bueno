import { Button } from "@heroui/react"
import Link from "next/link"

export default function ChangeButton() {
    return(
        <Button className="px-6 py-3 rounded-lg bg-gray-300 font-bold text-lg cursor-pointer hover:bg-gray-200">
            <Link href="/auth/signup">Signup</Link>
        </Button>
    )
}
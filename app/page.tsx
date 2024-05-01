"use client"
import { Button } from "@nextui-org/react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-7 mt-10">
        <Link href="/dashboard">
          <Button>Back Office</Button>
        </Link>
        <Link href="/login">
          <Button>Sign In</Button>
        </Link>
    </main>
  )
}

import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center mt-10">
      <Link href="/dashboard">
        <Button>Back Office</Button>
      </Link>
    </main>
  )
}

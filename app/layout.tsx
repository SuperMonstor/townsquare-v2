import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/shared/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Bengaluru Townsquare",
	description: "Find Bangalore's best communities",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<div className="mx-32">{children}</div>
			</body>
		</html>
	)
}

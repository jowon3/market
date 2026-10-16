import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "깡통한입 | 부평깡통시장 맛집 발견", description: "골목마다 맛있는 발견. 부산 부평깡통시장에서 취향에 맞는 맛집을 찾아보세요." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ko"><body>{children}</body></html>; }

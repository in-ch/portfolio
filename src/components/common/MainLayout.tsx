interface Props {
    children: React.ReactNode
}

export default function MainLayout({children}: Props) {
    return (
        <main className="xtab:mt-16 xtab:ml-52 mt-14 ml-2">
            {children}
        </main>
    );
}
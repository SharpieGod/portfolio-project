export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center pl-[15%] mt-20">
                <h1 className="text-4xl md:text-8xl font-medium tracking-tighter">
                    Darko Sabo
                </h1>
                <p className="ml-14 text-2xl text-muted-foreground">
                    Professional Web Developer and Game Dev
                </p>
            </div>
            <div className="h-screen border-t-2 border-gray-200 bg-gray-50 mt-24 flex flex-col w-full">
                <div className="flex flex-col p-12 border-b-2 gap-y-4">
                    <h1 className="text-4xl">Experience</h1>
                    <p className="text-2xl pl-12 text-muted-foreground">
                        Worked for 20 years, at 10 different companies,
                        including Amazon, Google, and Microsoft.
                    </p>
                </div>
            </div>
        </div>
    );
}

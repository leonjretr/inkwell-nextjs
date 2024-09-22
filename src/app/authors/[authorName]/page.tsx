const Page = ({params}: { params: { authorName: string } }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white pb-10">
            <h1 className={"text-black text-3xl flex justify-center mt-10"}>
                Authors name: {params.authorName}
            </h1>
        </div>
    );
};

export default Page;
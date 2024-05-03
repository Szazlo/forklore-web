import Navbar from "@/components/navbar";
import Footer from "@/components/footer.tsx";
import "./main.css";

function Recipe() {
    return (
        <>
            <Navbar />
            <main className={"flex-grow mx-5"}>
                <div className="flex flex-col justify-start w-full">
                    <div className="flex items-start">
                        <div className="flex w-3/5 h-96 bg-[url('https://nomadparadise.com/wp-content/uploads/2023/04/501_00fi-735x490.jpg')] rounded-2xl">
                            <div className="flex flex-col justify-end">
                                <h1 className="text-4xl text-white px-4 pt-4">Mici</h1>
                                <p className="text-white p-4 pt-0">with brotchen und senf. Das ist gud jaa</p>
                            </div>
                        </div>
                        <div className="flex w-2/5 h-96 border-2 border-secondary rounded-2xl ml-4"></div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Recipe;
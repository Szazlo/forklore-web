import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/footer.tsx";
import "./main.css";

function Recipe() {
    return (
        <>
            <Navbar/>
            <main className={"flex-grow mx-5"}>
                <div className="flex flex-col justify-start w-full">
                    <div className="flex items-start justify-center">
                        <img src={'https://nomadparadise.com/wp-content/uploads/2023/04/501_00fi-735x490.jpg'}
                             alt="Recipe" className={'w-2/5 h-96 rounded-2xl ml-4'}/>
                        <div className="flex w-2/5 h-96 border-2 border-secondary rounded-2xl ml-4">
                            <div className="flex flex-col justify-between w-full p-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h1 className="text-4xl">Recipe Name</h1>
                                        <p>Description</p>
                                    </div>
                                    <div className={'flex flex-col'}>
                                        <div className="flex">
                                            <img src={'https://i1.sndcdn.com/artworks-000351391263-hmj4bg-t500x500.jpg'}
                                                 alt="Profile"
                                                 className="h-11 w-11 mx-2 rounded-full"/>
                                            <div className="flex flex-col">
                                                <p className={'block'}>Nibba Shrigga</p>
                                                <p className={'flex justify-end text-primary text-sm'}>@shrigger</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col items-start">
                                        <p><b>Prep Time: </b>40 min</p>
                                        <p><b>Cook Time: </b>25 min</p>
                                        <p><b>Difficulty: </b>Medium</p>
                                    </div>
                                    <div className="flex flex-col items-end justify-end">
                                        <div className="flex items-end justify-end">
                                            <button className={'btn'}>Save</button>
                                            <button className={'btn'}>Share</button>
                                        </div>
                                        <p className={'text-yellow-400 text-3xl'}>* * * *</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Recipe;

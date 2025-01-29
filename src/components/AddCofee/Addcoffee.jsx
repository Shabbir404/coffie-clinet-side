import { Link, useNavigate } from "react-router-dom";
import '../AddCofee/addcoffee.css'
import { GoArrowLeft } from "react-icons/go";
import Swal from 'sweetalert2'
const Addcoffee = () => {

    const navigate = useNavigate();
    const handleAddCoffee = e => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const test = form.test.value;
        const details = form.details.value;
        const url = form.url.value;
        const newCoffe = { name, supplier, category, chef, test, details, url }
        // console.log(newCoffe);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffe)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'New coffee added.',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        navigate('/')
                    });
                }
                // console.log(data)
            }

            )

    }

    return (
        <div className="md:w-10/12 mx-auto">
            <Link to='/' className=" flex mt-8 w-[163px] p-2 rounded-md
             rancho-font text-gray-800 hover:bg-[#D2B48C] text-2xl text-outline">
                <GoArrowLeft className="mr-3 mt-1"></GoArrowLeft>
                Back to home</Link>
            <div className="bg-[#F4F3F0] md:w-[1320px] md:h-[650px] rounded-md mt-8">
                <div className="">
                    <h1 className="pt-12 text-center rancho-font text-gray-700 text-outline text-4xl">Add New Coffee</h1>
                    <div className="flex justify-center mt-8">
                        <p className="text-center raleway-font text-[#646363] 
                        w-[820px] p-4 md:p-0">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>

                    {/* add coffee form section*/}
                    <div className="md:w-8/12 mx-auto w-full">
                        <form onSubmit={handleAddCoffee} className="mt-8 px-4 md:px-0">
                            <div className="md:flex justify-between">
                                <div className="space-y-3">
                                    <h1 className="raleway-font font-semibold text-left">Name</h1>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Enter coffee name"
                                        className="pr-58 bg-white p-2 border-0 outline-none w-full md:w-auto mx-auto md:mx-0" />
                                    <h1 className="raleway-font font-semibold text-left">Supplier</h1>
                                    <input
                                        name="supplier"
                                        type="text"
                                        placeholder="Enter supplier name"
                                        className="pr-58 bg-white p-2 border-0 outline-none w-full md:w-auto mx-auto md:mx-0" />

                                    <h1 className="raleway-font font-semibold text-left">Category</h1>
                                    <input
                                        name="category"
                                        type="text"
                                        placeholder="Enter category"
                                        className="pr-58 bg-white p-2 border-0 outline-none w-full md:w-auto mx-auto md:mx-0" />
                                </div>

                                <div className="space-y-3 mt-6 md:mt-0">
                                    <h1 className="raleway-font font-semibold text-left">Chef</h1>
                                    <input
                                        name="chef"
                                        type="text"
                                        placeholder="Enter chef name"
                                        className="pr-58 p-2 bg-white border-0 outline-none w-full md:w-auto mx-auto md:mx-0" />
                                    <h1 className="raleway-font font-semibold text-left">Test</h1>
                                    <input
                                        name="test"
                                        type="text"
                                        placeholder="Enter test details"
                                        className="pr-58 p-2 bg-white border-0 outline-none w-full md:w-auto mx-auto md:mx-0" />
                                    <h1 className="raleway-font font-semibold text-left">Details</h1>
                                    <input
                                        name="details"
                                        type="text"
                                        placeholder="Enter details"
                                        className="pr-58 p-2 bg-white border-0 outline-none w-full md:w-auto mx-auto md:mx-0" />
                                </div>
                            </div>
                            <div>
                                <h1 className="raleway-font font-semibold mt-3 text-left">Photo URL</h1>
                                <input
                                    name="url"
                                    type="text"
                                    placeholder="Enter photo URL"
                                    className="w-full mb-4 mt-3 bg-white p-2 border-0 outline-none" />
                                <button className="w-full p-2 rounded-md rancho-font font-medium text-2xl 
                                bg-[#D2B48C] border-2 border-[#331A15] cursor-pointer hover:bg-[#e6ceb0]">Add Coffee</button>
                            </div>
                        </form>
                    </div>
                    {/* add coffee form section*/}
                </div>
            </div>
        </div>
    );
};

export default Addcoffee;
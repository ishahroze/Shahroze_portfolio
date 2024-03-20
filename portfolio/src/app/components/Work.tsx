import React from "react";
import Image from "next/image";
import Link from "next/link";
function Work() {
  return (
    <div className="min-h-screen bg-slate-800">
      <div className="flex flex-col  w-full h-full justify-center items-center  ">
        <div>
          <p className="text-4xl text-white font-bold inline-flex text-center justify-center border-b-4 border-pink-600">
            Work{" "}
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-1 gap-x-0 gap-y-8  ml-10 mr-10   h-auto">
        {/* <div className="bg-blue-600 hover:bg-white flex flex-col  border-white border-4 items-center">
          <Image
            src={"/skill3.png"}
            alt="bg"
            width={100}
            height={100}
            className="w-full h-48"
          />
          <div className="text text-red-900 text-3xl font-bold font-sans">About</div>
          <div className="flex items-center p-7 pt-3">
            An e-commerce website is an online platform that allows businesses
            to sell products or services to customers over the internet. These
            websites typically include features such as product listings,
            shopping carts, payment gateways, and order management systems. Here
            are some key components of an e-commerce website
          </div>
        </div> */}
        <div className="card hover:scale-110 duration-500 w-96 glass">
  <figure><img src="/bg.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">About</h2>
    <p> I created this website using NextJs . Made an attractive UI using Tailwind CSS and Liabraries 
      . Dynamic Routes are Integrated for Product Details . Just Visit This and take a look  </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Website</button>
      <button className="btn btn-primary">GitHub</button>
    </div>
  </div>
</div>
        <div ><div className="card hover:scale-110 duration-500 w-96 glass">
  <figure><img src="/bg.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">About</h2>
    <p> I created this website using NextJs . Made an attractive UI using Tailwind CSS and Liabraries 
      . Dynamic Routes are Integrated for Product Details . Just Visit This and take a look  </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Website</button>
      <button className="btn btn-primary">GitHub</button>
    </div>
  </div>
</div></div>
        <div ><div className="card hover:scale-110 duration-500 w-96 glass">
  <figure><img src="/bg.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">About</h2>
    <p> I created this website using NextJs . Made an attractive UI using Tailwind CSS and Liabraries 
      . Dynamic Routes are Integrated for Product Details . Just Visit This and take a look  </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Website</button>
      <button className="btn btn-primary">GitHub</button>
    </div>
  </div>
</div></div>
      </div>
      <div className="bg-[url('/bg.jpg')]">

</div>
    </div>
  );
}

export default Work;

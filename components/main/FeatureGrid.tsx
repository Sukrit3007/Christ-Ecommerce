import { LayoutGrid } from "../ui/layout-grid";

export default function FeatureGrid() {
    return (
        <div className="relative h-screen py-20 w-full">
          <LayoutGrid cards={cards} />
        </div>
      );
}

const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Clothing</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Express your Crusader spirit with our exclusive range of clothing. Whether
        you're looking for comfortable t-shirts, stylish hoodies, or trendy sweatshirts, 
        we have it all. Our designs are inspired by the vibrancy and energy of Christ University,
         making them perfect for students, alumni, and supporters alike.
        </p>
      </div>
    );
  };
   
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Accessories</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Complete your look with our collection of accessories. From stylish caps that add flair to 
        your outfit to practical tote bags for carrying your essentials, we have accessories that cater
         to your needs. Show off your pride in Christ University wherever you go with our range of accessories.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Mugs</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Start your day off right with our personalized mugs. Whether you prefer a classic design featuring 
        the Christ University logo or a custom mug with your name and graduation year, our mugs are the perfect way 
        to enjoy your favorite beverage while representing your alma mater.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Merchandise</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Looking for the perfect gift for a fellow Crusader or a memento of your time at Christ University? Explore our
         selection of merchandise, including keychains, stickers, and more. Our merchandise is designed to celebrate the unique 
         spirit of Christ University and make meaningful gifts for any occasion.
        </p>
      </div>
    );
  };
   
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1601612611384-3636f4acff79?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1570951993722-70be21d0b78b?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  

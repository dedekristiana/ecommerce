import HeaderSatu from "./HeaderSatu";
import HeaderDua from "./HeaderDua";
import HeaderTiga from "./HeaderTiga";
import Footer from "./Footer";

const Layout = (Props) => {
  return (
    <div className="container mx-auto mb-96">
      {/* header satu */}
      <div className="flex justify-between  p-2">
        <HeaderSatu />
      </div>
      {/* header dua */}
      <div className="flex justify-between mt-10 p-2">
        <HeaderDua />
      </div>
      {/* header tiga */}
      <div className="bg-gray-100 mt-8 p-2">
        <ul className="flex justify-around">
          <HeaderTiga title="Bakery" />
          <HeaderTiga title="Fruit & Vegetables" />
          <HeaderTiga title="Meat & Fish" />
          <HeaderTiga title="Drinks" />
          <HeaderTiga title="Kitchen" />
          <HeaderTiga title="Special Nutrition" />
          <HeaderTiga title="Baby" />
          <HeaderTiga title="Pharmacy" />
        </ul>
      </div>

      {Props.children}

      {/* card footer */}
      <div className="flex justify-between p-10 rounded-lg border-2 ">
        <div className="">
          <h2 className="text-lg font-semibold mb-5 ">Get in touch</h2>
          <Footer page="About Us" />
          <Footer page="Careers" />
          <Footer page="Press Releases" />
          <Footer page="Blog" />
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-5 ">Connections</h2>
          <Footer page="Facebook" />
          <Footer page="Twitter" />
          <Footer page="Instagram" />
          <Footer page="Youtube" />
          <Footer page="Linkedin" />
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-5 ">Earning</h2>
          <Footer page="Become an Affiliate" />
          <Footer page="Advertise Your Product" />
          <Footer page="Sell on Market" />
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-5 ">Account</h2>
          <Footer page="Your account" />
          <Footer page="Return Centre" />
          <Footer page="100% purchase protection" />
          <Footer page="Chat with us" />
          <Footer page="Help" />
        </div>
      </div>
      {/* footer */}
      <div className="mt-10 ">
        <p>Copyright © 2022 dksa.id</p>
      </div>
    </div>
  );
};

export default Layout;

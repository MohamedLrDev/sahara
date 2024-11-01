import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const productLinks = ['Demo', 'Security', 'FAQ', 'Features'];
  const resourcesLinks = ['Installation Manual', 'Release Note', 'Community Help'];
  const companyLinks = ['About Us', 'Career', 'Press', 'Support'];
  
  return (
    <footer className="bg-[#2A2D3E] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">Sahara<br />QUAD</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="YourEmail"
              className="bg-transparent border-b border-white focus:outline-none"
            />
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product Section */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
              <Facebook className="w-6 h-6" />
              <Linkedin className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        {/* <div className="flex justify-center space-x-4">
          {['visa', 'mastercard', 'amex', 'paypal', 'apple-pay', 'google-pay'].map((brand) => (
            <div key={brand} className="w-10 h-6 bg-gray-300 rounded"></div>
          ))}
        </div> */}
      </div>
    </footer>
  )
}

export default Footer

import Link from "next/link";

const AppDownload = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Get the best turf booking experience on your mobile. Book, manage,
            and pay for your sports facilities on the go.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center"
            >
              <span className="mr-2">App Store</span>
            </Link>
            <Link
              href="#"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center"
            >
              <span className="mr-2">Google Play</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppDownload;

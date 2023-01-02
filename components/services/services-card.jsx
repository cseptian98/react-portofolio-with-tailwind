import Image from "next/image";
import maintenance from "../../public/maintenance.webp";

export const ServiceCard = () => {
  return (
    <div className="lg:flex gap-12">
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-300">
        <Image
          alt="design"
          className="mx-auto"
          src={maintenance}
          width={100}
          height={100}
        />
        <h3 className="text-lg font-medium pt-8 pb-2">On Progress</h3>
        <p className="py-2">Content Lorem Ipsum Dolor Sit Amet</p>
        <h4 className="py-4 text-teal-600">Header List</h4>
        <p className="text-gray-800 py-1">ABCD</p>
        <p className="text-gray-800 py-1">ABCD</p>
        <p className="text-gray-800 py-1">ABCD</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-300">
        <Image
          alt="design"
          className="mx-auto"
          src={maintenance}
          width={100}
          height={100}
        />
        <h3 className="text-lg font-medium pt-8 pb-2">On Progress</h3>
        <p className="py-2">Content Lorem Ipsum Dolor Sit Amet</p>
        <h4 className="py-4 text-teal-600">Header List</h4>
        <p className="text-gray-800 py-1">ABCD</p>
        <p className="text-gray-800 py-1">ABCD</p>
        <p className="text-gray-800 py-1">ABCD</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-300">
        <Image
          alt="design"
          className="mx-auto"
          src={maintenance}
          width={100}
          height={100}
        />
        <h3 className="text-lg font-medium pt-8 pb-2">On Progress</h3>
        <p className="py-2">Content Lorem Ipsum Dolor Sit Amet</p>
        <h4 className="py-4 text-teal-600">Header List</h4>
        <p className="text-gray-800 py-1">ABCD</p>
        <p className="text-gray-800 py-1">ABCD</p>
        <p className="text-gray-800 py-1">ABCD</p>
      </div>
    </div>
  );
};

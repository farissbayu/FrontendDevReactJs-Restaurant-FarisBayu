import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-col py-4 px-16">
        <h1 className="text-4xl mb-8">Restaurants</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut elit
          at tortor rhoncus varius tincidunt eu nibh. Donec in urna sed lacus
          vestibulum semper.
        </p>
      </div>
      <Outlet />
    </div>
  );
}

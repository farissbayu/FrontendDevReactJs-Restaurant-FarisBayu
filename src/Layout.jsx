import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div>
        <h1>Restaurants</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut elit
          at tortor rhoncus varius tincidunt eu nibh. Donec in urna sed lacus
          vestibulum semper.
        </p>
      </div>
      <Outlet />
    </div>
  );
}

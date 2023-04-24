import { createContext, useState } from "react";


export const sidebarContext = createContext(null);

export const MySidebarProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  function toggleSidebar() {
    setSidebarIsOpen(!sidebarIsOpen);
  }

  return (
    <sidebarContext.Provider
      value={{ sbIsOpen: sidebarIsOpen, toggle: toggleSidebar }}
    >
      {children}
    </sidebarContext.Provider>
  );
};
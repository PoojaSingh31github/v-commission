import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "../context/SidebarContext";
import ScrollProgressCircle from "../components/ScrollProgressCircle";

const Layout = () => {
  const { isSidebarOpen, setIsSidebarOpen, isMobile } = useSidebar();

  return (
    <div className="relative max-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 flex overflow-auto">
      {/* Sidebar + overlay animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {isMobile && (
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            <motion.aside
              initial={{ x: isMobile ? -300 : 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isMobile ? -300 : 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`fixed md:static top-0 left-0 z-40 h-full w-64 bg-gradient-to-br from-pink-50 via-white to-blue-50 shadow-2xl md:shadow-none rounded-r-4xl md:rounded-none overflow-hidden border border-pink-100`}
            >
              <Sidebar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div className="flex-1 flex flex-col transition-all duration-300">
        <Header
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          userName="John Doe"
          notificationCount={3}
        />

        <main className="bg-gradient-to-br from-pink-50 via-white to-blue-50 flex-1 overflow-y-auto p-2 md:p-4 lg:p-6 transition-all duration-300">
          <Outlet />
        </main>
        <ScrollProgressCircle />

        <Footer />
      </motion.div>
    </div>
  );
};

export default Layout;

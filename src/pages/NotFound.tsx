
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md text-center">
        <Logo className="mx-auto mb-8" />
        
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h1 className="text-6xl font-serif font-bold mb-4 text-lingofun-primary">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
          
          <a 
            href="/" 
            className="btn-primary flex items-center justify-center mx-auto max-w-xs"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

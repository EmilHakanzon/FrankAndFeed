"use client";
import { useEffect, useState } from "react";

export default function LoginForm() {
     const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isFormFocused, setIsFormFocused] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    useEffect(() => {
        // Api anrop senare
        //simulera loading time innan formuläret
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // simmulera Api anrop senare...
        setTimeout(() => {
            console.log("Loggar in med:", username, password); //ändrat från email till username
            //lägg till inloggningslogik här senare
            setIsLoading(false);
            // Här kommer senare backend API-anrop   
        }, 2000);
    };

     const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            console.log("Skapar konto:", username, password, repeatPassword);
            setIsLoading(false);
            setIsRegistering(false); // gå tillbaka till login efter registrering
        }, 2000);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600 mb-4"></div>
                <p className="text-gray-600 text-sm">Loading...</p>
            </div>
        );
    }

   return (
        <div className="relative">
            {/* Background blur overlay */}
          {/*
            {isFormFocused && (
                <div
                    className="fixed inset-0 backdrop-blur-md bg-black/10 z-10 transition-all duration-300"
                    onClick={() => setIsFormFocused(false)}
                />
            )}
         */}
            {/* Login form with frosted glass effect */}
            {/*
            <div
                className={`relative z-20 transition-all duration-300 rounded-xl p-6 ${
                    isFormFocused
                        ? 'backdrop-blur-xl bg-white border border-white/20 shadow-xl'
                        : 'bg-transparent border-transparent'
                }`}
                //Kanske ta bort hela backdrop-blur och frosted glass effekten? eller bara lägga till den på loggin formuläret??
                onClick={() => setIsFormFocused(true)}
            >
                */}
                {!isRegistering ? (
                    <form onSubmit={handleLogin} className="flex flex-col space-y-4 pt-4">
                        <input
                            type="text"
                            placeholder="username..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                         className={`border rounded-lg p-3 text-sm focus:outline-none transition-all ${
  isFormFocused ? 'input-focused' : 'input-default'
}`}

                            disabled={isLoading}
                        />
                        <input
                            type="password"
                            placeholder="password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          className={`border rounded-lg p-3 text-sm focus:outline-none transition-all ${
  isFormFocused ? 'input-focused' : 'input-default'
}`}

                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center ${
                                isFormFocused
                                    ? 'bg-blue-600/80 hover:bg-blue-700/80 disabled:bg-blue-400/60 backdrop-blur-sm border border-blue-500/30'
                                    : 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400'
                            }`}
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                                    Logging in...
                                </>
                            ) : (
                                "Log In"
                            )}
                        </button>
                        <hr className={`my-8 ${isFormFocused ? 'border-white/20' : 'border-gray-200'}`} />
                        <button
                            type="button"
                            onClick={() => setIsRegistering(true)} // ändrat från alert till setIsRegistering för att visa registreringsformulär
                            disabled={isLoading}
                            className={`text-white py-3 rounded-lg font-semibold transition-all ${
                                isFormFocused
                                    ? 'bg-green-600/80 hover:bg-green-700/80 disabled:bg-green-400/60 backdrop-blur-sm border border-green-500/30'
                                    : 'bg-green-600 hover:bg-green-700 disabled:bg-green-400'
                            }`}
                        >Create Account
                        </button>
                    </form>
                ) : (
                    //Skapa konto fomrulär
                    <form onSubmit={handleRegister} className="flex flex-col space-y-4 pt-4">
                        <input
                            type="text"
                            placeholder="username..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={`border rounded-lg p-3 text-sm focus:outline-none transition-all ${
  isFormFocused ? 'input-focused' : 'input-default'
}`}

                            disabled={isLoading}
                        />
                        <input
                            type="password"
                            placeholder="password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`border rounded-lg p-3 text-sm focus:outline-none transition-all ${
  isFormFocused ? 'input-focused' : 'input-default'
}`}

                        />
                        <input
                            type="password"
                            placeholder="repeat password..."
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                           className={`border rounded-lg p-3 text-sm focus:outline-none transition-all ${
  isFormFocused ? 'input-focused' : 'input-default'
}`}

                            disabled={isLoading}
                        />

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all"
                        >
                            Skapa nytt konto
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsRegistering(false)} //tillbaka till inloggning
                            className="text-blue-600 font-medium hover:underline text-sm mt-2"
                        >Tillbaka till inloggning
                        </button>
                    </form>
                )}
        </div>
    );
}
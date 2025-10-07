//Första skiss på inloggningsformulär

"use client";
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Loggar in med:", email, password); //här kan vi ändra till username iställer för email
        //lägg till inloggningslogik här senare
    };
    return (
        <form onSubmit={handleLogin} className="flex flex-col space-y-4 pt-4">
            <input
                type="email"
                placeholder="email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-200 bg-blue-50 text-gray-800 rounded p-2 text-sm focus:outline-blue-500"
            />
            <input
                type="password"
                placeholder="password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-200 bg-blue-50 text-gray-800  rounded p-2 text-sm focus:outline-blue-500"
            />

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
            >Logga in
            </button>

            <hr className="my-8" />

            <button
                type="button"
                onClick={() => alert("Skapa nytt konto")}
                className="bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition"
            >Skapa nytt konto
            </button>
        </form>
    );
}
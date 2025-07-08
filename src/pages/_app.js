import "../styles/globals.css";
import { Inter } from "next/font/google";
import { createContext, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const inter = Inter({ subsets: ["latin"] });

// Default fallback values
const defaultImpactNumbers = [
  { number: 100, suffix: "+", label: "Students Mentored" },
  { number: 20, suffix: "+", label: "Community Partnerships" },
  { number: 40, suffix: "+", label: "Volunteers Trained" },
  { number: 100, suffix: "+", label: "Instructional Hours" },
];

// Create context
export const ImpactNumbersContext = createContext({
  impactNumbers: defaultImpactNumbers,
  loading: true,
  error: null,
  refreshImpactNumbers: () => {},
});

function MyApp({ Component, pageProps }) {
  const [impactNumbers, setImpactNumbers] = useState(defaultImpactNumbers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch impact numbers
  const fetchImpactNumbers = async () => {
    try {
      const impactDoc = doc(db, "other", "impactNumbers");
      const docSnap = await getDoc(impactDoc);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const fetchedNumbers = [
          {
            number: data["Students Mentored"] || 100,
            suffix: "+",
            label: "Students Mentored",
          },
          {
            number: data["Community Partnerships"] || 20,
            suffix: "+",
            label: "Community Partnerships",
          },
          {
            number: data["Volunteers Trained"] || 40,
            suffix: "+",
            label: "Volunteers Trained",
          },
          {
            number: data["Instructional Hours"] || 100,
            suffix: "+",
            label: "Instructional Hours",
          },
        ];
        setImpactNumbers(fetchedNumbers);
      }
    } catch (error) {
      console.error("Error fetching impact numbers:", error);
      setError("Failed to load impact numbers");
      // Keep default values if fetch fails
    } finally {
      setLoading(false);
    }
  };

  // Preload impact numbers on app mount
  useEffect(() => {
    fetchImpactNumbers();
  }, []);

  return (
    <ImpactNumbersContext.Provider
      value={{
        impactNumbers,
        loading,
        error,
        refreshImpactNumbers: fetchImpactNumbers,
      }}
    >
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ImpactNumbersContext.Provider>
  );
}

export default MyApp;

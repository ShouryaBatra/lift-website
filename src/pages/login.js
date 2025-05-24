import { useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const ADMIN_EMAIL = "lift.empowerlives@gmail.com";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (email !== ADMIN_EMAIL) {
      setError("Only the LIFT admin account can log in.");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin-chapters");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="flex items-center justify-center min-h-[60vh] bg-lift-accent py-20">
        <Container className="max-w-md w-full">
          <Card className="p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-lift-blue mb-6 text-center">
              Login
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-lift-text-primary font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lift-blue"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-lift-text-primary font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lift-blue"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-lift-blue focus:outline-none"
                    tabIndex={-1}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              {error && <div className="text-red-500 text-center">{error}</div>}
              <Button
                type="submit"
                size="lg"
                className="w-full mt-2"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Card>
        </Container>
      </section>
    </MainLayout>
  );
}

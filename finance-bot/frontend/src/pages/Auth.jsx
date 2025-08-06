import { useState } from "react";
import { Eye, EyeOff, User, Mail, Phone, Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_URL;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // LOGIN
        const res = await axios.post(
          `${baseUrl}/api/auth/login`,
          { email: form.email, password: form.password },
          { withCredentials: true }
        );
        toast.success(res.data.message);
      } else {
        // REGISTER
        const res = await axios.post(
          `${baseUrl}/api/auth/register`,
          {
            name: form.name,
            email: form.email,
            phone: form.phone,
            password: form.password,
          },
          { withCredentials: true }
        );
        toast.success(res.data.message);
      }

      // Redirect to home
      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              {/* Name */}
              <div className="flex items-center border rounded px-3">
                <User size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="flex-1 outline-none py-2"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex items-center border rounded px-3">
                <Phone size={18} className="text-gray-400 mr-2" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[6-9]{1}[0-9]{9}"
                  className="flex-1 outline-none py-2"
                  required
                />
              </div>
            </>
          )}

          {/* Email */}
          <div className="flex items-center border rounded px-3">
            <Mail size={18} className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="flex-1 outline-none py-2"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded px-3">
            <Lock size={18} className="text-gray-400 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="flex-1 outline-none py-2"
              required
            />
            {showPassword ? (
              <EyeOff
                size={18}
                className="cursor-pointer text-gray-400"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Eye
                size={18}
                className="cursor-pointer text-gray-400"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex justify-center items-center"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : "Submit"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            {isLogin ? "Register here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;

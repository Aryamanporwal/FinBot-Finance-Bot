import { useState } from "react";
import { Eye, EyeOff, User, Mail, Phone, Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

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
        const res = await axios.post(
          `${baseUrl}/api/auth/login`,
          { email: form.email, password: form.password },
          { withCredentials: true }
        );
        toast.success(res.data.message);
      } else {
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
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <>
              <div className="auth-input-wrapper">
                <User size={18} className="icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="auth-input"
                  required
                />
              </div>

              <div className="auth-input-wrapper">
                <Phone size={18} className="icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[6-9]{1}[0-9]{9}"
                  className="auth-input"
                  required
                />
              </div>
            </>
          )}

          <div className="auth-input-wrapper">
            <Mail size={18} className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>

          <div className="auth-input-wrapper">
            <Lock size={18} className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="auth-input"
              required
            />
            {showPassword ? (
              <EyeOff
                size={18}
                className="icon clickable"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Eye
                size={18}
                className="icon clickable"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <button type="submit" disabled={loading} className="auth-btn">
            {loading ? <Loader2 className="spin" size={20} /> : "Submit"}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;

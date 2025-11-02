"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "m@example.com",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange =
    (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    // Handle successful login
    console.log("Login successful", formData);
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  return (
    <Card
      sx={(theme) => ({
        mx: "auto",
        p: 4,
        borderRadius: 2,
        maxWidth: 400,
        ...theme.applyStyles("dark", {
          bgcolor: "grey.900",
        }),
      })}
    >
      <Stack spacing={3}>
        <Stack spacing={1} textAlign="center">
          <Typography variant="h3" component="h1">
            Login to your account
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Enter your email below to login to your account
          </Typography>
        </Stack>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              required
              label="Email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange("email")}
              error={!!errors.email}
              helperText={errors.email}
              autoComplete="email"
            />

            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Typography
                  variant="body2"
                  component="label"
                  htmlFor="password-input"
                >
                  Password
                </Typography>
                <Link
                  href="#"
                  variant="body2"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Forgot password clicked");
                  }}
                  sx={{ textDecoration: "none" }}
                >
                  Forgot your password?
                </Link>
              </Stack>
              <TextField
                id="password-input"
                fullWidth
                required
                type="password"
                variant="outlined"
                value={formData.password}
                onChange={handleInputChange("password")}
                error={!!errors.password}
                helperText={errors.password}
                autoComplete="current-password"
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={isLoading}
              sx={{ py: 1.5 }}
            >
              {isLoading ? "Signing in..." : "Login"}
            </Button>

            <Button
              variant="outlined"
              size="large"
              fullWidth
              onClick={handleGoogleLogin}
              sx={{ py: 1.5 }}
            >
              Login with Google
            </Button>
          </Stack>
        </Box>

        <Typography variant="body2" textAlign="center" color="text.secondary">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              console.log("Sign up clicked");
            }}
            sx={{ textDecoration: "underline" }}
          >
            Sign up
          </Link>
        </Typography>
      </Stack>
    </Card>
  );
}

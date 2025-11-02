"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginFormSplit() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange =
    (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));

      // Clear errors on input change
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log("Login attempt:", formData);
    }
  };

  const handleGitHubLogin = () => {
    // Handle GitHub login logic here
    console.log("GitHub login attempt");
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr minmax(500px, 1.5fr)",
        },
        minHeight: "100lvh",
      }}
    >
      {/* Left side - Image */}
      <Box
        sx={(theme) => ({
          display: {
            xs: "none",
            md: "flex",
          },
          height: "100lvh",
          bgcolor: "grey.50",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
          ...theme.applyStyles("dark", {
            bgcolor: "grey.900",
          }),
        })}
      >
        <Box
          component="img"
          src="https://placehold.co/600x800"
          alt="Login illustration"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 2,
            opacity: 0.2, // TODO: remove this once we have a real image
          }}
        />
      </Box>

      {/* Right side - Login Form */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
          }}
        >
          {/* Logo */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              position: { xs: "static", md: "fixed" },
              top: "2rem",
              left: "2rem",
              mb: 2,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                bgcolor: "text.primary",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  bgcolor: "background.paper",
                  borderRadius: 0.5,
                }}
              />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Acme Inc.
            </Typography>
          </Stack>

          {/* Form Header */}
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
              Login to your account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enter your email below to login to your account
            </Typography>
          </Box>

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {/* Email Field */}
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                placeholder="m@example.com"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange("email")}
                error={!!errors.email}
                helperText={errors.email}
              />

              {/* Password Field */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" component="label">
                    Password
                  </Typography>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ textDecoration: "none" }}
                  >
                    Forgot your password?
                  </Link>
                </Box>
                <TextField
                  fullWidth
                  required
                  type="password"
                  placeholder="Enter your password"
                  variant="outlined"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </Box>

              {/* Login Button */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  py: 1.5,
                }}
              >
                Login
              </Button>

              {/* Divider */}
              <Divider sx={{ color: "text.secondary", fontSize: "0.875rem" }}>
                Or continue with
              </Divider>

              {/* GitHub Login Button */}
              <Button
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<GitHub />}
                onClick={handleGitHubLogin}
                sx={{
                  py: 1.5,
                }}
                aria-label="Login with GitHub"
              >
                Login with GitHub
              </Button>

              {/* Sign Up Link */}
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography variant="body2" color="text.secondary">
                  Don&apos;t have an account?{" "}
                  <Link href="#" sx={{ textDecoration: "underline" }}>
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

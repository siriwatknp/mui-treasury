"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
} from "@mui/icons-material";

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function SpaceLogin() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange =
    (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "rememberMe" ? event.target.checked : event.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));

      // Clear errors on input
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gridTemplateRows: { xs: "auto 1fr", md: "1fr" },
      }}
    >
      {/* Left Panel - Space Theme */}
      <Box
        sx={{
          position: "relative",
          background: `linear-gradient(135deg, 
            rgba(13, 27, 42, 0.95) 0%, 
            rgba(27, 39, 53, 0.9) 50%, 
            rgba(65, 74, 76, 0.8) 100%
          )`,
          color: "white",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 3, md: 4 },
          minHeight: { xs: "40vh", md: "100vh" },
          textAlign: "center",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("https://placehold.co/800x600")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.3,
            zIndex: -1,
          },
        }}
      >
        <Stack spacing={3} sx={{ maxWidth: 400, zIndex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 300,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            The Future
            <br />
            Through Space
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              lineHeight: 1.6,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Lorem posuere at odio nullam
            pulvinar enim consequat at vitae. Elit ullamcorper ultrices magna
            malesuada erat.
          </Typography>
        </Stack>

        {/* Progress Indicators */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Box
            sx={{
              width: 32,
              height: 4,
              bgcolor: "white",
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              width: 16,
              height: 4,
              bgcolor: "rgba(255, 255, 255, 0.4)",
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              width: 16,
              height: 4,
              bgcolor: "rgba(255, 255, 255, 0.4)",
              borderRadius: 2,
            }}
          />
        </Stack>
      </Box>

      {/* Right Panel - Login Form */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 3, md: 4 },
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{ maxWidth: 400, mx: "auto" }}>
          <Stack spacing={3}>
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: "text.primary",
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                }}
              >
                Enter your email and password to access your account
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  required
                  label="Password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  error={!!errors.password}
                  helperText={errors.password}
                  variant="outlined"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <IconButton
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    },
                  }}
                />

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 1, flexWrap: "wrap" }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.rememberMe}
                        onChange={handleInputChange("rememberMe")}
                        size="small"
                      />
                    }
                    label="Remember me"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "0.875rem",
                      },
                    }}
                  />
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      ml: "auto",
                      color: "text.primary",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Forgot password? <strong>Change now</strong>
                  </Link>
                </Stack>

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Sign In
                </Button>

                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={0.5}
                  sx={{ mt: 2, flexWrap: "wrap" }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Don&apos;t have an account?
                  </Typography>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      ml: "auto",
                      color: "text.primary",
                      textDecoration: "none",
                      fontWeight: 500,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Sign Up
                  </Link>
                </Stack>

                <Divider sx={{ color: "text.secondary", fontSize: "0.875rem" }}>
                  or
                </Divider>

                <Stack spacing={1.5}>
                  <Button fullWidth variant="outlined" startIcon={<Google />}>
                    Google
                  </Button>
                  <Button fullWidth variant="outlined" startIcon={<Facebook />}>
                    Facebook
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

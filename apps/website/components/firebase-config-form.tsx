"use client";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import { Pencil, Trash2 } from "lucide-react";

const STORAGE_KEY = "firebase-config";

const PLACEHOLDER = `{
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
}`;

export function parseFirebaseConfig(
  input: string,
): Record<string, string> | null {
  let configStr = input.trim();

  // Extract config from Firebase SDK snippet (const firebaseConfig = {...})
  const snippetMatch = configStr.match(
    /(?:const|let|var)\s+\w+\s*=\s*(\{[\s\S]*?\});/,
  );
  if (snippetMatch) {
    configStr = snippetMatch[1];
  }

  // Find the object if input contains extra text
  const objectMatch = configStr.match(/\{[\s\S]*\}/);
  if (objectMatch) {
    configStr = objectMatch[0];
  }

  // Convert JS object notation to JSON (add quotes to unquoted keys)
  const jsonStr = configStr.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');

  try {
    return JSON.parse(jsonStr);
  } catch {
    return null;
  }
}

function ConfigSnippet({
  config,
  onEdit,
  onClear,
}: {
  config: string;
  onEdit: () => void;
  onClear: () => void;
}) {
  const truncated = config.length > 80 ? config.slice(0, 80) + "..." : config;

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mb: 4,
        p: 2,
        borderRadius: 2,
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          Firebase Config
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton size="small" onClick={onEdit} aria-label="Edit config">
            <Pencil size={16} />
          </IconButton>
          <IconButton
            size="small"
            onClick={onClear}
            aria-label="Clear config"
            sx={{ color: "error.main" }}
          >
            <Trash2 size={16} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          fontFamily: "monospace",
          fontSize: 12,
          color: "text.secondary",
          bgcolor: "action.hover",
          p: 1,
          borderRadius: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {truncated}
      </Box>
    </Box>
  );
}

export function FirebaseConfigForm() {
  const [config, setConfig] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [hasExisting, setHasExisting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setConfig(stored);
      setHasExisting(true);
    } else {
      setIsEditing(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = config.trim();
    if (!trimmed) {
      setError("Config is required");
      return;
    }

    const parsed = parseFirebaseConfig(trimmed);
    if (!parsed) {
      setError("Invalid config format");
      return;
    }
    if (!parsed.apiKey || !parsed.projectId) {
      setError("Missing required fields: apiKey, projectId");
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    window.location.reload();
  };

  const handleCancel = () => {
    if (hasExisting) {
      const stored = localStorage.getItem(STORAGE_KEY);
      setConfig(stored || "");
      setIsEditing(false);
    }
    setError("");
  };

  const handleClear = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  if (hasExisting && !isEditing) {
    return (
      <ConfigSnippet
        config={config}
        onEdit={() => setIsEditing(true)}
        onClear={handleClear}
      />
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mb: 4,
        p: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
      }}
    >
      <Alert severity="info" sx={{ mb: 2 }}>
        <Link
          href="https://firebase.google.com/docs/ai-logic"
          target="_blank"
          rel="noopener"
        >
          Firebase AI Logic
        </Link>{" "}
        must be enabled to test demos on this page.
      </Alert>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        required
        multiline
        rows={8}
        label="Firebase Config (JSON)"
        placeholder={PLACEHOLDER}
        value={config}
        onChange={(e) => {
          setConfig(e.target.value);
          setError("");
        }}
        error={!!error}
        helperText="Paste the SDK snippet from Firebase console (⚙️ → Project settings → Your apps)"
        slotProps={{
          input: {
            sx: { fontFamily: "monospace", fontSize: 13 },
          },
        }}
        sx={{ mb: 2 }}
      />

      <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
        {hasExisting && <Button onClick={handleCancel}>Cancel</Button>}
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </Box>
  );
}

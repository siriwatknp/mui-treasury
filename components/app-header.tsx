"use client";

import { HeaderNav } from "@/components/header-nav";
import Link from "next/link";
import { useColorScheme } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { Moon, Sun, Monitor } from "lucide-react";

export function AppHeader() {
  const { mode, setMode } = useColorScheme();

  return (
    <header className="border-b px-6 py-3 sticky top-0 bg-background z-[1299]">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold hover:opacity-80">
          MUI+
        </Link>
        <div className="flex items-center gap-2">
          <HeaderNav />
          <Select
            value={mode || "system"}
            onChange={(e) =>
              setMode(e.target.value as "system" | "light" | "dark")
            }
            size="small"
            sx={{
              visibility: mode ? "visible" : "hidden",
              "& svg + span": { display: { xs: "none", sm: "inline-block" } },
            }}
          >
            <MenuItem value="system">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  height: "1lh",
                }}
              >
                <Monitor size={16} />
                <span>System</span>
              </Box>
            </MenuItem>
            <MenuItem value="light">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  height: "1lh",
                }}
              >
                <Sun size={16} />
                <span>Light</span>
              </Box>
            </MenuItem>
            <MenuItem value="dark">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  height: "1lh",
                }}
              >
                <Moon size={16} />
                <span>Dark</span>
              </Box>
            </MenuItem>
          </Select>
        </div>
      </div>
    </header>
  );
}

"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { FavoriteBorder, Favorite, Check } from "@mui/icons-material";

interface ProductCard2Props {
  productName?: string;
  productModel?: string;
  price?: number;
  sizes?: string[];
  colors?: { name: string; value: string }[];
  imageUrl?: string;
  onFavorite?: (favorited: boolean) => void;
  onAddToCart?: (selectedSize: string, selectedColor: string) => void;
}

export default function ProductCard2({
  productName = "React Running",
  productModel = "Shoe 2",
  price = 120,
  sizes = ["9", "9.5", "10", "10.5", "11"],
  colors = [
    { name: "Black colorway", value: "#1a1a1a" },
    { name: "Light colorway", value: "#e5e5e5" },
    { name: "Clay colorway", value: "#8B7355" },
    { name: "Cream colorway", value: "#F5F5DC" },
  ],
  imageUrl = "https://placehold.co/280x200",
  onFavorite,
  onAddToCart,
}: ProductCard2Props) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(
    colors[0]?.value || ""
  );
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSizeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newSize: string
  ) => {
    if (newSize !== null) {
      setSelectedSize(newSize);
    }
  };

  const handleColorChange = (colorValue: string) => {
    setSelectedColor(colorValue);
  };

  const handleFavoriteToggle = () => {
    const newFavoriteState = !isFavorited;
    setIsFavorited(newFavoriteState);
    onFavorite?.(newFavoriteState);
  };

  const handleAddToCart = async () => {
    if (!selectedSize) return;

    setIsLoading(true);
    try {
      const selectedColorName =
        colors.find((c) => c.value === selectedColor)?.name || "";
      onAddToCart?.(selectedSize, selectedColorName);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card
      sx={(theme) => ({
        maxWidth: 360,
        mx: "auto",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: theme.shadows[8],
        ...theme.applyStyles("dark", {
          bgcolor: "grey.900",
        }),
      })}
    >
      <Box
        sx={{
          position: "relative",
          p: 0.5,
          pb: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 200,
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={`${productName} ${productModel} sneaker`}
          sx={{
            borderRadius: 2.5,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
        <IconButton
          aria-label={
            isFavorited ? "Remove from favorites" : "Add to favorites"
          }
          onClick={handleFavoriteToggle}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 1,
          }}
        >
          {isFavorited ? (
            <Favorite sx={{ color: "error.icon" }} />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>
      </Box>

      {/* Product details */}
      <Stack spacing={2} sx={{ p: 3 }}>
        {/* Product title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 600, lineHeight: 1.2 }}
          >
            {productName}
          </Typography>
          <Box
            component="span"
            sx={(theme) => ({
              bgcolor: "grey.200",
              color: "text.secondary",
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              ...theme.applyStyles("dark", {
                bgcolor: "grey.800",
              }),
            })}
          >
            {productModel}
          </Box>
        </Box>

        {/* Color variants */}
        <Box>
          <Stack direction="row" spacing={1}>
            {colors.map((color) => (
              <IconButton
                key={color.value}
                aria-label={color.name}
                onClick={() => handleColorChange(color.value)}
                sx={(theme) => ({
                  width: 32,
                  height: 32,
                  color: `${color.value} !important`,
                  bgcolor: `${color.value} !important`,
                  border: selectedColor === color.value ? 2 : 1,
                  borderColor:
                    selectedColor === color.value ? "primary.main" : "divider",
                  borderRadius: "50%",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  ...theme.applyStyles("dark", {
                    borderColor:
                      selectedColor === color.value
                        ? "primary.light"
                        : "grey.600",
                  }),
                })}
              >
                {selectedColor === color.value && (
                  <Check sx={{ filter: "invert(1) contrast(20)" }} />
                )}
              </IconButton>
            ))}
          </Stack>
        </Box>

        {/* Size selection */}
        <Box>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
            Size
          </Typography>
          <ToggleButtonGroup
            size="small"
            value={selectedSize}
            exclusive
            onChange={handleSizeChange}
            aria-label="shoe size selection"
            sx={{
              gap: 1,
              "& .MuiToggleButton-root": {
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                px: 2,
                py: 1,
                "&.Mui-selected": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  borderColor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                },
              },
            }}
          >
            {sizes.map((size) => (
              <ToggleButton key={size} value={size} aria-label={`Size ${size}`}>
                {size}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        {/* Price and add to cart */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 1,
          }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Price
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              ${price}
            </Typography>
          </Box>
          <Button
            variant="contained"
            disabled={!selectedSize || isLoading}
            onClick={handleAddToCart}
            sx={(theme) => ({
              borderRadius: 3,
              px: 3,
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
              "&:disabled": {
                bgcolor: "action.disabledBackground",
                color: "action.disabled",
              },
              ...theme.applyStyles("dark", {
                "&:disabled": {
                  bgcolor: "grey.800",
                  color: "grey.600",
                },
              }),
            })}
          >
            {isLoading ? "Adding..." : "Add to cart"}
          </Button>
        </Box>
      </Stack>
    </Card>
  );
}

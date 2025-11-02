"use client";

import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

interface ProductCardProps {
  title?: string;
  price?: string;
  description?: string;
  attributes?: { label: string; value: string }[];
  imageUrl?: string;
  imageAlt?: string;
  onAddToCart?: () => void;
  onToggleFavorite?: (isFavorite: boolean) => void;
  isFavorite?: boolean;
  className?: string;
}

export default function ProductCard({
  title = "Acme Running Shoe",
  price = "$69.99",
  description = "Crossing hardwood comfort with off-court flair. '80s-inspired construction, bold details and nothin'-but-net style.",
  attributes = [
    { label: "Size", value: "EU38" },
    { label: "Color", value: "BLACK/WHITE" },
  ],
  imageUrl = "https://placehold.co/400x300",
  imageAlt = "Product image",
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
  className,
}: ProductCardProps) {
  const [favorite, setFavorite] = React.useState(isFavorite);

  const handleToggleFavorite = () => {
    const newFavoriteState = !favorite;
    setFavorite(newFavoriteState);
    onToggleFavorite?.(newFavoriteState);
  };

  const handleAddToCart = () => {
    onAddToCart?.();
  };

  return (
    <Card
      className={className}
      sx={{
        maxWidth: 320,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          height: 200,
          background: `linear-gradient(135deg, ${
            (theme.vars || theme).palette.primary.main
          } 0%, ${(theme.vars || theme).palette.primary.light} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <IconButton
          onClick={handleToggleFavorite}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          {favorite ? (
            <Favorite sx={{ color: "error.main" }} />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>

        <Box
          component="img"
          src={imageUrl}
          alt={imageAlt}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h6" component="h3" fontWeight="bold">
            {title}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
            sx={{ mt: -1 }}
          >
            {attributes.map((attr, index) => (
              <Chip
                key={index}
                label={attr.value}
                variant="outlined"
                size="small"
                sx={(theme) => ({
                  fontSize: "0.875rem",
                  borderColor: (theme.vars || theme).palette.divider,
                  color: (theme.vars || theme).palette.text.secondary,
                })}
              />
            ))}
          </Stack>

          <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
            {description}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            spacing={1}
          >
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
              >
                PRICE
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="text.primary">
                {price}
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              sx={(theme) => ({
                borderRadius: 2,
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
                background: `linear-gradient(135deg, ${
                  (theme.vars || theme).palette.primary.main
                } 0%, ${(theme.vars || theme).palette.primary.light} 100%)`,
                "&:hover": {
                  background: `linear-gradient(135deg, ${
                    (theme.vars || theme).palette.primary.dark
                  } 0%, ${(theme.vars || theme).palette.primary.main} 100%)`,
                },
              })}
            >
              Add to cart
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

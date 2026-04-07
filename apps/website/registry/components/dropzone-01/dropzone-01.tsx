"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useDropzone, FileRejection, DropzoneOptions } from "react-dropzone";

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export interface DropzoneFile extends File {
  preview?: string;
}

export interface Dropzone01Props
  extends Omit<DropzoneOptions, "onDrop" | "onDropAccepted"> {
  value?: DropzoneFile[];
  onChange?: (files: DropzoneFile[]) => void;
  onReject?: (rejections: FileRejection[]) => void;
  helperText?: React.ReactNode;
}

export function Dropzone01({
  value = [],
  onChange,
  onReject,
  helperText = "PNG, JPG, PDF up to 10MB",
  accept,
  maxSize = 10 * 1024 * 1024,
  maxFiles,
  disabled,
  ...options
}: Dropzone01Props) {
  const handleDrop = React.useCallback(
    (acceptedFiles: File[], rejections: FileRejection[]) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: file.type.startsWith("image/")
            ? URL.createObjectURL(file)
            : undefined,
        }),
      );
      onChange?.([...value, ...newFiles]);
      if (rejections.length > 0) {
        onReject?.(rejections);
      }
    },
    [value, onChange, onReject],
  );

  const handleRemove = (index: number) => {
    const newFiles = [...value];
    const removed = newFiles.splice(index, 1)[0];
    if (removed.preview) {
      URL.revokeObjectURL(removed.preview);
    }
    onChange?.(newFiles);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    isFocused,
  } = useDropzone({
    onDrop: handleDrop,
    accept,
    maxSize,
    maxFiles,
    disabled,
    ...options,
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        {...getRootProps()}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          p: 4,
          borderRadius: 2,
          border: "2px dashed",
          borderColor: "divider",
          bgcolor: "background.paper",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
          transition: "all 0.2s ease-in-out",
          outline: "none",
          ...(isFocused && {
            borderColor: "primary.main",
            bgcolor: "action.hover",
          }),
          ...(isDragActive && {
            borderColor: "primary.main",
            bgcolor: "action.hover",
          }),
          ...(isDragAccept && {
            borderColor: "success.main",
            bgcolor: "success.softBg",
          }),
          ...(isDragReject && {
            borderColor: "error.main",
            bgcolor: "error.softBg",
          }),
          "@media (hover: hover)": {
            "&:hover": {
              borderColor: disabled ? "divider" : "primary.main",
              bgcolor: disabled ? "background.paper" : "action.hover",
            },
          },
        }}
      >
        <input {...getInputProps()} />
        <CloudUploadOutlinedIcon
          sx={{
            fontSize: 48,
            color: isDragReject
              ? "error.main"
              : isDragAccept
                ? "success.main"
                : "text.icon",
          }}
        />
        <Typography variant="body1" color="text.secondary" textAlign="center">
          {isDragActive
            ? isDragReject
              ? "Some files will be rejected"
              : "Drop files here"
            : "Drag & drop files here, or click to browse"}
        </Typography>
        {helperText && (
          <Typography variant="body2" color="text.disabled">
            {helperText}
          </Typography>
        )}
      </Box>

      {value.length > 0 && (
        <List dense sx={{ mt: 1 }}>
          {value.map((file, index) => (
            <ListItem
              key={`${file.name}-${index}`}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => handleRemove(index)}
                  size="small"
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
              sx={{
                bgcolor: "action.hover",
                borderRadius: 1,
                mb: 0.5,
                "&:last-child": { mb: 0 },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {file.preview ? (
                  <Box
                    component="img"
                    src={file.preview}
                    alt={file.name}
                    sx={{
                      width: 24,
                      height: 24,
                      objectFit: "cover",
                      borderRadius: 0.5,
                    }}
                  />
                ) : (
                  <InsertDriveFileOutlinedIcon color="action" />
                )}
              </ListItemIcon>
              <ListItemText
                primary={file.name}
                secondary={formatFileSize(file.size)}
                slotProps={{
                  primary: {
                    noWrap: true,
                    sx: { fontWeight: 500 },
                  },
                  secondary: {
                    sx: { fontSize: "0.75rem" },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

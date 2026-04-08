import * as React from "react";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import TableChartIcon from "@mui/icons-material/TableChart";
import CodeIcon from "@mui/icons-material/Code";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import ArticleIcon from "@mui/icons-material/Article";
import ClearIcon from "@mui/icons-material/Clear";

function getFileIcon(filename: string | undefined) {
  if (!filename) return <AttachFileIcon />;

  const ext = filename.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "pdf":
      return <PictureAsPdfIcon />;
    case "doc":
    case "docx":
      return <DescriptionIcon />;
    case "xls":
    case "xlsx":
    case "csv":
      return <TableChartIcon />;
    case "js":
    case "ts":
    case "jsx":
    case "tsx":
    case "html":
    case "css":
    case "json":
    case "xml":
    case "py":
    case "java":
    case "c":
    case "cpp":
    case "go":
    case "rs":
      return <CodeIcon />;
    case "mp3":
    case "wav":
    case "ogg":
    case "flac":
    case "aac":
      return <AudioFileIcon />;
    case "mp4":
    case "webm":
    case "avi":
    case "mov":
    case "mkv":
      return <VideoFileIcon />;
    case "zip":
    case "rar":
    case "7z":
    case "tar":
    case "gz":
      return <FolderZipIcon />;
    case "txt":
    case "md":
    case "rtf":
      return <ArticleIcon />;
    default:
      return <AttachFileIcon />;
  }
}

export interface FileUploadFieldProps
  extends Omit<TextFieldProps, "value" | "onChange" | "type"> {
  value?: File | null;
  onChange?: (file: File | null) => void;
  accept?: string;
  clearable?: boolean;
}

export const FileUploadField = React.forwardRef<
  HTMLDivElement,
  FileUploadFieldProps
>(function FileUploadField(props, ref) {
  const {
    value,
    onChange,
    accept,
    clearable = true,
    slotProps,
    ...other
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const previewUrl = React.useMemo(() => {
    if (value?.type.startsWith("image/")) {
      return URL.createObjectURL(value);
    }
    return null;
  }, [value]);

  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange?.(file);
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onChange?.(null);
  };

  const filename = value?.name;

  const renderStartAdornment = () => {
    if (previewUrl) {
      return (
        <Box
          component="img"
          src={previewUrl}
          alt={filename}
          sx={{
            width: 24,
            height: 24,
            objectFit: "cover",
            borderRadius: 0.5,
          }}
        />
      );
    }
    return React.cloneElement(getFileIcon(filename), {
      sx: { color: filename ? "text.primary" : "text.secondary" },
    });
  };

  return (
    <TextField
      ref={ref}
      {...other}
      slotProps={{
        ...slotProps,
        input: {
          startAdornment: (
            <InputAdornment position="start">
              {renderStartAdornment()}
            </InputAdornment>
          ),
          endAdornment:
            clearable && value ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear file"
                  onClick={handleClear}
                  edge="end"
                  size="small"
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null,
          ...slotProps?.input,
        },
        htmlInput: {
          type: "file",
          accept,
          onChange: handleFileChange,
          ref: inputRef,
          sx: {
            "&::file-selector-button": {
              display: "none",
            },
            "&:not(:disabled)": {
              cursor: "pointer",
            },
          },
          ...slotProps?.htmlInput,
        },
      }}
    />
  );
});

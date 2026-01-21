"use client";

import * as React from "react";
import { AppTheme } from "@/app/theme";
import { useTheme, useColorScheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Alert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OutlinedInput from "@mui/material/OutlinedInput";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Fab from "@mui/material/Fab";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Skeleton from "@mui/material/Skeleton";
import Slider from "@mui/material/Slider";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";
import FaceIcon from "@mui/icons-material/Face";
import DoneIcon from "@mui/icons-material/Done";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SvgIcon from "@mui/material/SvgIcon";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

/**
 * MUST be a direct child of GridContainer
 */
function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <>
      <h3 className="text-2xl font-bold">{title}</h3>
      {description && <p className="self-baseline">{description}</p>}
    </>
  );
}

interface ColorBoxProps {
  color: string;
  label: string;
}

function ColorBox({ color, label }: ColorBoxProps) {
  const { mode, systemMode } = useColorScheme();
  const resolvedMode = (systemMode || mode) as "light" | "dark";
  const { colorSchemes } = useTheme();

  // Convert color prop like "palette-primary-main" to nested object path
  const getColorValue = (colorPath: string) => {
    const parts = colorPath.split("-");
    if (parts.length < 3) return colorPath;

    const [category, section, variant] = parts;
    if (category === "palette" && colorSchemes?.[resolvedMode]?.palette) {
      const palette = colorSchemes[resolvedMode].palette as unknown as Record<
        string,
        Record<string, string>
      >;
      const paletteSection = palette[section];
      return paletteSection?.[variant] || colorPath;
    }
    return <>&nbsp;</>;
  };

  const colorValue = getColorValue(color);

  return (
    <div className="text-center snap-center">
      <div
        className="w-30 h-10 border border-gray-300 dark:border-gray-600 rounded mb-2"
        style={{ backgroundColor: `var(--plus-${color})` }}
      />
      <Typography
        variant="caption"
        sx={{ display: "block", color: "text.secondary" }}
      >
        {label}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          display: "block",
          fontFamily: "monospace",
          fontSize: "0.7rem",
          lineHeight: "18px",
        }}
      >
        {colorValue}
      </Typography>
    </div>
  );
}

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

function GridContainer({ children, className = "" }: GridContainerProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-2 md:grid-cols-[1fr_2fr] md:gap-8 ${className}`}
    >
      {children}
    </div>
  );
}
interface GridCellProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MUST be a direct child of GridContainer
 */
function GridCell({ children, className = "" }: GridCellProps) {
  return (
    <div className={`col-start-1 mt-4 md:mt-3 ${className}`}>{children}</div>
  );
}

/**
 * MUST be a direct child of GridContainer
 */
function GridDemo({ children, className = "" }: GridCellProps) {
  return <div className={`md:col-start-2 ${className}`}>{children}</div>;
}

interface CodeChipProps {
  children: React.ReactNode;
}

function CodeChip({ children }: CodeChipProps) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-mono bg-gray-100 text-gray-700 border border-gray-300 rounded-md">
      {children}
    </span>
  );
}

export default function ThemePreviewPage() {
  const [checked, setChecked] = React.useState(true);
  const [checkedState, setCheckedState] = React.useState({
    option1: true,
    option2: false,
    option3: true,
  });
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = React.useState(false);
  const [fullscreenDialogOpen, setFullscreenDialogOpen] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("option1");
  const [radioGroupValue, setRadioGroupValue] = React.useState("female");
  const [ratingValue, setRatingValue] = React.useState(3);
  const [selectValue, setSelectValue] = React.useState("");
  const [selectAgeValue, setSelectAgeValue] = React.useState("");
  const [sliderValue, setSliderValue] = React.useState(30);
  const [rangeValue, setRangeValue] = React.useState([20, 40]);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [stepperActiveStep, setStepperActiveStep] = React.useState(1);
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [tabValue, setTabValue] = React.useState(0);
  const [toggleValue, setToggleValue] = React.useState("bold");
  const [toggleAlignment, setToggleAlignment] = React.useState("left");

  const autocompleteOptions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];

  return (
    <AppTheme>
      <div className="max-w-7xl mx-auto py-8 px-4">
        <Typography variant="h3" gutterBottom sx={{ mb: 6, fontWeight: 700 }}>
          Theme Preview
        </Typography>

        <GridContainer>
          {/* Palette Section */}
          <SectionHeader title="Palette" description="All colors" />

          {/* Primary Colors */}
          <GridCell>
            <h3 className="text-xl font-bold">Primary</h3>
            <p className="self-baseline">Monochromatic branding palette</p>
          </GridCell>
          <GridDemo className="flex overflow-x-auto overscroll-x-contain snap-x gap-4 mt-4">
            <ColorBox color="palette-primary-main" label="main" />
            <ColorBox color="palette-primary-light" label="light" />
            <ColorBox color="palette-primary-dark" label="dark" />
            <ColorBox color="palette-primary-text" label="text" />
          </GridDemo>

          {/* Secondary Colors */}
          <GridCell>
            <h3 className="text-xl font-bold">Secondary</h3>
            <p className="self-baseline">
              System gray tones for supporting UI elements
            </p>
          </GridCell>
          <GridDemo className="flex overflow-x-auto overscroll-x-contain snap-x gap-4 mt-4">
            <ColorBox color="palette-secondary-main" label="main" />
            <ColorBox color="palette-secondary-light" label="light" />
            <ColorBox color="palette-secondary-dark" label="dark" />
            <ColorBox color="palette-secondary-text" label="text" />
          </GridDemo>

          {/* Success Colors */}
          <GridCell>
            <h3 className="text-xl font-bold">Success</h3>
            <p className="self-baseline">
              Green palette for positive actions and states
            </p>
          </GridCell>
          <GridDemo className="flex overflow-x-auto overscroll-x-contain snap-x gap-4 mt-4">
            <ColorBox color="palette-success-main" label="main" />
            <ColorBox color="palette-success-light" label="light" />
            <ColorBox color="palette-success-dark" label="dark" />
            <ColorBox color="palette-success-text" label="text" />
          </GridDemo>

          {/* Error Colors */}
          <GridCell>
            <h3 className="text-xl font-bold">Error</h3>
            <p className="self-baseline">
              Red palette for error states and destructive actions
            </p>
          </GridCell>
          <GridDemo className="flex overflow-x-auto overscroll-x-contain snap-x gap-4 mt-4">
            <ColorBox color="palette-error-main" label="main" />
            <ColorBox color="palette-error-light" label="light" />
            <ColorBox color="palette-error-dark" label="dark" />
            <ColorBox color="palette-error-text" label="text" />
          </GridDemo>

          {/* Warning Colors */}
          <GridCell>
            <h3 className="text-xl font-bold">Warning</h3>
            <p className="self-baseline">
              Yellow/amber palette for warning states
            </p>
          </GridCell>
          <GridDemo className="flex overflow-x-auto overscroll-x-contain snap-x gap-4 mt-4">
            <ColorBox color="palette-warning-main" label="main" />
            <ColorBox color="palette-warning-light" label="light" />
            <ColorBox color="palette-warning-dark" label="dark" />
            <ColorBox color="palette-warning-text" label="text" />
          </GridDemo>

          {/* Info Colors */}
          <GridCell>
            <h3 className="text-xl font-bold">Info</h3>
            <p className="self-baseline">
              Blue palette for informational elements
            </p>
          </GridCell>
          <GridDemo className="flex overflow-x-auto overscroll-x-contain snap-x gap-4 mt-4">
            <ColorBox color="palette-info-main" label="main" />
            <ColorBox color="palette-info-light" label="light" />
            <ColorBox color="palette-info-dark" label="dark" />
            <ColorBox color="palette-info-text" label="text" />
          </GridDemo>

          {/* Background & Text Colors */}
          <GridCell>
            <h3 className="text-xl font-bold">Background & Text</h3>
            <p className="self-baseline"></p>
          </GridCell>
          <GridDemo className="flex overflow-x-auto overscroll-x-contain snap-x gap-4 mt-4">
            <ColorBox
              color="palette-background-default"
              label="background.default"
            />
            <ColorBox
              color="palette-background-paper"
              label="background.paper"
            />
            <ColorBox color="palette-text-primary" label="text.primary" />
            <ColorBox color="palette-text-secondary" label="text.secondary" />
          </GridDemo>

          {/* Typography Section */}
          <GridCell>
            <h3 className="text-xl font-bold">Typography</h3>
            <p className="self-baseline"></p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Typography variant="h1">h1. Heading</Typography>
              <Typography variant="h2">h2. Heading</Typography>
              <Typography variant="h3">h3. Heading</Typography>
              <Typography variant="h4">h4. Heading</Typography>
              <Typography variant="subtitle1">
                subtitle1. Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="subtitle2">
                subtitle2. Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="body1">
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
              <Typography variant="body2">
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
              <Typography variant="button" sx={{ display: "block" }}>
                button text
              </Typography>
              <Typography variant="caption" sx={{ display: "block" }}>
                caption text
              </Typography>
              <Typography variant="overline" sx={{ display: "block" }}>
                overline text
              </Typography>
            </div>
          </GridDemo>

          <GridCell>
            <h3 className="text-xl font-bold">Input Base</h3>
            <p className="self-baseline">Enter and edit text</p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <InputBase size="small" placeholder="Enter text" />
              <InputBase placeholder="Enter text" />
              <InputBase size="large" placeholder="Enter text" />
            </div>
          </GridDemo>

          {/* TextField Section */}
          <GridCell>
            <h3 className="text-xl font-bold">TextField</h3>
            <p className="self-baseline">Enter and edit text</p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <TextField
                label="Standard"
                variant="standard"
                placeholder="Enter text"
              />
              <TextField
                label="Outlined"
                variant="outlined"
                placeholder="Enter text"
              />
              <TextField
                label="Filled"
                variant="filled"
                placeholder="Enter text"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;outlined&quot;</CodeChip> (default)
          </GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <TextField
                label="Basic TextField"
                variant="outlined"
                placeholder="Enter your text here"
              />
              <TextField
                label="With Helper Text"
                variant="outlined"
                placeholder="Enter text"
                helperText="This is helper text"
              />
              <TextField
                label="Required Field"
                variant="outlined"
                required
                placeholder="This field is required"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <TextField
                label="Small TextField"
                variant="outlined"
                size="small"
                placeholder="Small size"
              />
              <TextField
                label="Small Filled"
                variant="filled"
                size="small"
                placeholder="Small filled"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;large&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <TextField
                label="Large TextField"
                variant="outlined"
                size="large"
                placeholder="Large size"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>error</CodeChip> state
          </GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <TextField
                label="Error State"
                variant="outlined"
                error
                value="Invalid input"
                helperText="This field has an error"
              />
              <TextField
                label="Error Required"
                variant="outlined"
                required
                error
                helperText="This field is required"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>disabled</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <OutlinedInput placeholder="Outlined" />
              <OutlinedInput placeholder="Small outlined" size="small" />
              <TextField
                label="Disabled"
                variant="outlined"
                disabled
                value="Disabled text"
              />
              <TextField
                label="Disabled Filled"
                variant="filled"
                disabled
                placeholder="Disabled placeholder"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>multiline</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <TextField
                label="Multiline"
                variant="outlined"
                multiline
                rows={3}
                placeholder="Enter multiple lines of text..."
              />
              <TextField
                label="Auto-resize"
                variant="outlined"
                multiline
                minRows={2}
                maxRows={4}
                placeholder="This will auto-resize as you type..."
              />
              <TextField
                label="Multiline"
                variant="outlined"
                size="small"
                multiline
                rows={3}
                placeholder="Enter multiple lines of text..."
              />
              <TextField
                label="Auto-resize"
                variant="outlined"
                size="large"
                multiline
                minRows={2}
                maxRows={4}
                placeholder="This will auto-resize as you type..."
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>fullWidth</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4">
              <TextField
                label="Full Width"
                variant="outlined"
                fullWidth
                placeholder="This field takes full width"
              />
              <TextField
                label="Full Width Filled"
                variant="filled"
                fullWidth
                placeholder="Full width filled variant"
              />
            </div>
          </GridDemo>

          <GridCell>With icons</GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <TextField
                label="Search"
                variant="outlined"
                placeholder="Search..."
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                label="Account"
                variant="outlined"
                placeholder="Username"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircleIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                size="small"
                label="Search"
                variant="outlined"
                placeholder="Search..."
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                size="small"
                label="Account"
                variant="outlined"
                placeholder="Username"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircleIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                size="large"
                label="Account"
                variant="outlined"
                placeholder="Username"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircleIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>
          </GridDemo>

          <GridCell>Input types</GridCell>
          <GridDemo>
            <div className="space-y-4 space-x-4 max-w-md">
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                placeholder="email@example.com"
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Enter password"
              />
              <TextField
                label="Number"
                variant="outlined"
                type="number"
                placeholder="Enter number"
              />
              <TextField
                label="Date"
                variant="outlined"
                type="date"
                slotProps={{
                  inputLabel: { shrink: true },
                }}
              />
            </div>
          </GridDemo>

          {/* Spacing & Radius Section */}
          <GridCell>
            <h3 className="text-xl font-bold">Spacing & Radius</h3>
            <p className="self-baseline"></p>
          </GridCell>
          <GridDemo>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold">Spacing Scale</h4>
                <p className="self-baseline">8px base</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((spacing) => (
                    <div key={spacing} className="text-center">
                      <div
                        className="bg-black rounded"
                        style={{
                          width: `${spacing * 8}px`,
                          height: `${spacing * 8}px`,
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ display: "block", mt: 1 }}
                      >
                        {spacing}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ display: "block", color: "text.secondary" }}
                      >
                        {spacing * 8}px
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold">Border Radius</h4>
                <p className="self-baseline"></p>
                <div className="flex gap-4 mt-4">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 bg-black"
                      style={{ borderRadius: 8 }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ display: "block", mt: 1 }}
                    >
                      Default (8px)
                    </Typography>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 bg-black"
                      style={{ borderRadius: 16 }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ display: "block", mt: 1 }}
                    >
                      2x (16px)
                    </Typography>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full" />
                    <Typography
                      variant="caption"
                      sx={{ display: "block", mt: 1 }}
                    >
                      Circle (50%)
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </GridDemo>

          {/* Shadows Section */}
          <GridCell>
            <h3 className="text-xl font-bold">Shadows</h3>
            <p className="self-baseline"></p>
          </GridCell>
          <GridDemo>
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                <div key={elevation} className="text-center">
                  <Paper
                    elevation={elevation}
                    sx={{
                      width: "100%",
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="caption">{elevation}</Typography>
                  </Paper>
                </div>
              ))}
            </div>
          </GridDemo>
        </GridContainer>
        <GridContainer className="mt-20">
          <SectionHeader
            title="Material UI"
            description="All building-block components"
          />

          {/* Accordion */}
          <GridCell>
            <h4 className="text-lg font-bold">Accordion</h4>
            <p className="self-baseline">
              Show/hide sections of related content
            </p>
          </GridCell>
          <GridDemo>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </GridDemo>

          {/* Alert - Standard */}
          <GridCell>
            <h4 className="text-lg font-bold">Alert</h4>
            <p className="self-baseline">
              Brief messages without interrupting user flow
            </p>
          </GridCell>

          {/* Alert - Filled */}
          <GridCell>
            <CodeChip>standard</CodeChip> variant (default)
          </GridCell>
          <GridDemo>
            <div className="space-y-3">
              <Alert severity="success">This is a success alert</Alert>
              <Alert severity="info">This is an info alert</Alert>
              <Alert severity="warning">This is a warning alert</Alert>
              <Alert severity="error">This is an error alert</Alert>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>filled</CodeChip> variant
          </GridCell>
          <GridDemo>
            <div className="space-y-3">
              <Alert severity="success" variant="filled">
                This is a success alert
              </Alert>
              <Alert severity="info" variant="filled">
                This is an info alert
              </Alert>
              <Alert severity="warning" variant="filled">
                This is a warning alert
              </Alert>
              <Alert severity="error" variant="filled">
                This is an error alert
              </Alert>
            </div>
          </GridDemo>

          {/* Alert - Outlined */}
          <GridCell>
            <CodeChip>outlined</CodeChip> variant
          </GridCell>
          <GridDemo>
            <div className="space-y-3">
              <Alert severity="success" variant="outlined">
                This is a success alert
              </Alert>
              <Alert severity="info" variant="outlined">
                This is an info alert
              </Alert>
              <Alert severity="warning" variant="outlined">
                This is a warning alert
              </Alert>
              <Alert severity="error" variant="outlined">
                This is an error alert
              </Alert>
            </div>
          </GridDemo>

          {/* Autocomplete */}
          <GridCell>
            <h4 className="text-lg font-bold">Autocomplete</h4>
            <p className="self-baseline">Text input with suggested options</p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Autocomplete
                options={autocompleteOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Choose a fruit" />
                )}
                sx={{ width: 300 }}
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>multiple</CodeChip> selection
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Autocomplete
                multiple
                options={autocompleteOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Choose fruits" />
                )}
                sx={{ width: 300 }}
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>multiple</CodeChip> selection (small)
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Autocomplete
                multiple
                size="small"
                options={autocompleteOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Choose fruits" />
                )}
                sx={{ width: 300 }}
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>multiple</CodeChip> selection (large)
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Autocomplete
                multiple
                size="large"
                options={autocompleteOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Choose fruits" />
                )}
                sx={{ width: 300 }}
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>freeSolo</CodeChip> custom input
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Autocomplete
                freeSolo
                options={autocompleteOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Type or choose a fruit" />
                )}
                sx={{ width: 300 }}
              />
            </div>
          </GridDemo>

          {/* Avatar */}
          <GridCell>
            <h4 className="text-lg font-bold">Avatar</h4>
            <p className="self-baseline">Profile pictures and icons</p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Avatar>A</Avatar>
              <Avatar sx={{ bgcolor: "secondary.main" }}>B</Avatar>
              <Avatar sx={{ bgcolor: "success.main" }}>C</Avatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;square&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Avatar variant="square">A</Avatar>
              <Avatar variant="square" sx={{ bgcolor: "secondary.main" }}>
                B
              </Avatar>
              <Avatar variant="square" sx={{ bgcolor: "success.main" }}>
                C
              </Avatar>
              <Avatar variant="square">
                <PersonIcon />
              </Avatar>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;rounded&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Avatar variant="rounded">A</Avatar>
              <Avatar variant="rounded" sx={{ bgcolor: "secondary.main" }}>
                B
              </Avatar>
              <Avatar variant="rounded" sx={{ bgcolor: "success.main" }}>
                C
              </Avatar>
              <Avatar variant="rounded">
                <PersonIcon />
              </Avatar>
            </div>
          </GridDemo>

          <GridCell>
            <h4 className="text-lg font-bold">AvatarGroup</h4>
            <p className="self-baseline">Multiple avatars grouped together</p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <AvatarGroup max={4}>
                <Avatar>A</Avatar>
                <Avatar sx={{ bgcolor: "secondary.main" }}>B</Avatar>
                <Avatar sx={{ bgcolor: "success.main" }}>C</Avatar>
                <Avatar sx={{ bgcolor: "warning.main" }}>D</Avatar>
                <Avatar sx={{ bgcolor: "error.main" }}>E</Avatar>
              </AvatarGroup>
            </div>
          </GridDemo>

          {/* Button */}
          <GridCell>
            <h4 className="text-lg font-bold">Button</h4>
            <p className="self-baseline">Actions and choices</p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;secondary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained" color="secondary">
                Contained
              </Button>
              <Button variant="outlined" color="secondary">
                Outlined
              </Button>
              <Button variant="text" color="secondary">
                Text
              </Button>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;success&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained" color="success">
                Contained
              </Button>
              <Button variant="outlined" color="success">
                Outlined
              </Button>
              <Button variant="text" color="success">
                Text
              </Button>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;error&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained" color="error">
                Contained
              </Button>
              <Button variant="outlined" color="error">
                Outlined
              </Button>
              <Button variant="text" color="error">
                Text
              </Button>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;warning&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained" color="warning">
                Contained
              </Button>
              <Button variant="outlined" color="warning">
                Outlined
              </Button>
              <Button variant="text" color="warning">
                Text
              </Button>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;info&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained" color="info">
                Contained
              </Button>
              <Button variant="outlined" color="info">
                Outlined
              </Button>
              <Button variant="text" color="info">
                Text
              </Button>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained" size="small">
                Small
              </Button>
              <Button variant="outlined" size="small">
                Small
              </Button>
              <Button variant="text" size="small">
                Small
              </Button>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;large&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained" size="large">
                Large
              </Button>
              <Button variant="outlined" size="large">
                Large
              </Button>
              <Button variant="text" size="large">
                Large
              </Button>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>startIcon</CodeChip> & <CodeChip>endIcon</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained" startIcon={<SendIcon />}>
                Send
              </Button>
              <Button variant="outlined" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>disabled</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained" disabled>
                Disabled
              </Button>
              <Button variant="outlined" disabled>
                Disabled
              </Button>
              <Button variant="text" disabled>
                Disabled
              </Button>
            </div>
          </GridDemo>

          <GridCell>Icon buttons</GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="contained">
                <FavoriteIcon />
              </Button>
              <Button variant="outlined">
                <ShareIcon />
              </Button>
              <Button variant="text">
                <DeleteIcon />
              </Button>
              <IconButton color="success" size="large">
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton color="success">
                <ShareIcon />
              </IconButton>
              <IconButton color="success" size="small">
                <ShareIcon />
              </IconButton>
              <IconButton color="error">
                <DeleteIcon />
              </IconButton>
              <IconButton
                color="error"
                size="small"
                sx={{ fontSize: "0.875rem" }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </GridDemo>

          {/* Card */}
          <GridCell>
            <h4 className="text-lg font-bold">Card</h4>
            <p className="self-baseline">
              Content and actions about single subject
            </p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4 max-w-sm">
              <Card>
                <CardHeader
                  title="Simple Card"
                  subheader="September 14, 2016"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 or 2 seeded
                    bell peppers, or add a bit of hot sauce to give it a bit
                    more kick.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          </GridDemo>

          <GridCell>With media</GridCell>
          <GridDemo>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.co/345x140"
                alt="Card image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;outlined&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <Card variant="outlined" sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Outlined Card
                </Typography>
                <Typography variant="body2">
                  This card uses the outlined variant to display a subtle
                  border.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Action</Button>
              </CardActions>
            </Card>
          </GridDemo>

          <GridCell>
            <CodeChip>elevation=0</CodeChip>
          </GridCell>
          <GridDemo>
            <Card elevation={0} sx={{ maxWidth: 300, bgcolor: "grey.100" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Flat Card
                </Typography>
                <Typography variant="body2">
                  This card has no elevation for a flat appearance.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Action</Button>
              </CardActions>
            </Card>
          </GridDemo>

          <GridCell>Complex card</GridCell>
          <GridDemo>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "red.500" }}>R</Avatar>}
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
                action={
                  <Button size="small">
                    <ShareIcon />
                  </Button>
                }
              />
              <CardMedia
                component="img"
                height="194"
                image="https://placehold.co/345x194"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<FavoriteIcon />}>
                  Like
                </Button>
                <Button size="small" startIcon={<ShareIcon />}>
                  Share
                </Button>
              </CardActions>
            </Card>
          </GridDemo>

          {/* Checkbox */}
          <GridCell>
            <h4 className="text-lg font-bold">Checkbox</h4>
            <p className="self-baseline">Select one or more items from set</p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <Checkbox checked={false} />
              <Checkbox checked={true} />
              <Checkbox indeterminate={true} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;secondary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Checkbox color="secondary" checked={true} />
              <Checkbox color="secondary" checked={false} />
              <Checkbox color="secondary" indeterminate={true} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;success&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Checkbox color="success" checked={true} />
              <Checkbox color="success" checked={false} />
              <Checkbox color="success" indeterminate={true} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Checkbox size="small" checked={true} />
              <Checkbox size="small" checked={false} />
              <Checkbox size="small" indeterminate={true} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;large&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Checkbox size="large" checked={true} />
              <Checkbox size="large" checked={false} />
              <Checkbox size="large" indeterminate={true} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>disabled</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Checkbox disabled checked={true} />
              <Checkbox disabled checked={false} />
              <Checkbox disabled indeterminate={true} />
            </div>
          </GridDemo>

          <GridCell>With labels</GridCell>
          <GridDemo>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedState.option1}
                    onChange={(e) =>
                      setCheckedState((prev) => ({
                        ...prev,
                        option1: e.target.checked,
                      }))
                    }
                  />
                }
                label="Option 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedState.option2}
                    onChange={(e) =>
                      setCheckedState((prev) => ({
                        ...prev,
                        option2: e.target.checked,
                      }))
                    }
                  />
                }
                label="Option 2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedState.option3}
                    onChange={(e) =>
                      setCheckedState((prev) => ({
                        ...prev,
                        option3: e.target.checked,
                      }))
                    }
                  />
                }
                label="Option 3"
              />
            </FormGroup>
          </GridDemo>

          {/* Chip */}
          <GridCell>
            <h4 className="text-lg font-bold">Chip</h4>
            <p className="self-baseline">
              Compact elements for inputs/attributes/actions
            </p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Default" />
              <Chip label="Clickable" onClick={() => {}} />
              <Chip label="Deletable" onDelete={() => {}} />
              <Chip
                label="Clickable & Deletable"
                onClick={() => {}}
                onDelete={() => {}}
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;outlined&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Default" variant="outlined" />
              <Chip label="Clickable" variant="outlined" onClick={() => {}} />
              <Chip label="Deletable" variant="outlined" onDelete={() => {}} />
              <Chip
                label="Clickable & Deletable"
                variant="outlined"
                onClick={() => {}}
                onDelete={() => {}}
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;primary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Primary" color="primary" />
              <Chip
                label="Primary Outlined"
                color="primary"
                variant="outlined"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;secondary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Secondary" color="secondary" />
              <Chip
                label="Secondary Outlined"
                color="secondary"
                variant="outlined"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;success&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Success" color="success" />
              <Chip
                label="Success Outlined"
                color="success"
                variant="outlined"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;error&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Error" color="error" />
              <Chip label="Error Outlined" color="error" variant="outlined" />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;warning&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Warning" color="warning" />
              <Chip
                label="Warning Outlined"
                color="warning"
                variant="outlined"
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;info&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Info" color="info" />
              <Chip label="Info Outlined" color="info" variant="outlined" />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Small" size="small" />
              <Chip label="Small Outlined" size="small" variant="outlined" />
              <Chip label="Small Deletable" size="small" onDelete={() => {}} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;large&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip label="Large" size="large" />
              <Chip label="Large Outlined" size="large" variant="outlined" />
              <Chip label="Large Deletable" size="large" onDelete={() => {}} />
            </div>
          </GridDemo>

          <GridCell>With icons</GridCell>
          <GridDemo>
            <div className="flex items-center gap-3 flex-wrap">
              <Chip icon={<FaceIcon />} label="Avatar" />
              <Chip icon={<DoneIcon />} label="Done" color="success" />
              <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
              <Chip icon={<FaceIcon />} label="Deletable" onDelete={() => {}} />
            </div>
          </GridDemo>

          {/* Dialog */}
          <GridCell>
            <h4 className="text-lg font-bold">Dialog</h4>
            <p className="self-baseline">Task information and decisions</p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Button variant="outlined" onClick={() => setDialogOpen(true)}>
                Open Dialog
              </Button>
              <Button
                variant="outlined"
                onClick={() => setAlertDialogOpen(true)}
              >
                Alert Dialog
              </Button>
              <Button
                variant="outlined"
                onClick={() => setFullscreenDialogOpen(true)}
              >
                Fullscreen Dialog
              </Button>
            </div>

            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
              <DialogTitle>Basic Dialog</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This is a basic dialog with title, content, and actions.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button
                  onClick={() => setDialogOpen(false)}
                  variant="contained"
                >
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog
              open={alertDialogOpen}
              onClose={() => setAlertDialogOpen(false)}
            >
              <DialogTitle>Alert Dialog</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to delete this item? This action cannot
                  be undone.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setAlertDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={() => setAlertDialogOpen(false)}
                  color="error"
                  variant="contained"
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog
              fullScreen
              open={fullscreenDialogOpen}
              onClose={() => setFullscreenDialogOpen(false)}
            >
              <DialogTitle>Fullscreen Dialog</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This is a fullscreen dialog that takes up the entire viewport.
                  Perfect for mobile devices or when you need maximum space.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setFullscreenDialogOpen(false)}>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </GridDemo>

          <GridCell>
            <CodeChip>maxWidth=&quot;sm&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <Button variant="outlined" onClick={() => setDialogOpen(true)}>
              Small Dialog
            </Button>
          </GridDemo>

          {/* Divider */}
          <GridCell>
            <h4 className="text-lg font-bold">Divider</h4>
            <p className="self-baseline">Thin line for grouping elements</p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <div>
                <Typography>Content above</Typography>
                <Divider />
                <Typography>Content below</Typography>
              </div>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;middle&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div>
              <Typography>Content above</Typography>
              <Divider variant="middle" />
              <Typography>Content below</Typography>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;inset&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div>
              <Typography>Content above</Typography>
              <Divider variant="inset" />
              <Typography>Content below</Typography>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>orientation=&quot;vertical&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-2" style={{ height: 40 }}>
              <Typography>Left</Typography>
              <Divider orientation="vertical" flexItem />
              <Typography>Middle</Typography>
              <Divider orientation="vertical" flexItem />
              <Typography>Right</Typography>
            </div>
          </GridDemo>

          <GridCell>With text</GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Divider>OR</Divider>
              <Divider textAlign="left">Left aligned</Divider>
              <Divider textAlign="right">Right aligned</Divider>
            </div>
          </GridDemo>

          <GridCell>In lists</GridCell>
          <GridDemo>
            <List sx={{ width: 300, bgcolor: "background.paper" }}>
              <ListItem>
                <ListItemText primary="Item 1" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Item 2" />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemText primary="Item 3" />
              </ListItem>
            </List>
          </GridDemo>

          {/* Fab */}
          <GridCell>
            <h4 className="text-lg font-bold">Fab</h4>
            <p className="self-baseline">Primary screen action</p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Fab color="primary">
                <AddIcon />
              </Fab>
              <Fab color="secondary">
                <EditIcon />
              </Fab>
              <Fab>
                <NavigationIcon />
              </Fab>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;extended&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Fab variant="extended" color="primary">
                <AddIcon sx={{ mr: 1 }} />
                Add Item
              </Fab>
              <Fab variant="extended" color="secondary">
                <EditIcon sx={{ mr: 1 }} />
                Edit
              </Fab>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Fab size="small" color="primary">
                <AddIcon />
              </Fab>
              <Fab size="small" color="secondary">
                <EditIcon />
              </Fab>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;large&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Fab size="large" color="primary">
                <AddIcon />
              </Fab>
              <Fab size="large" color="secondary">
                <EditIcon />
              </Fab>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>disabled</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Fab disabled>
                <AddIcon />
              </Fab>
              <Fab variant="extended" disabled>
                <EditIcon sx={{ mr: 1 }} />
                Disabled
              </Fab>
            </div>
          </GridDemo>

          {/* Radio */}
          <GridCell>
            <h4 className="text-lg font-bold">Radio</h4>
            <p className="self-baseline">Select one option from set</p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Radio
                checked={radioValue === "option1"}
                onChange={() => setRadioValue("option1")}
              />
              <Radio
                checked={radioValue === "option2"}
                onChange={() => setRadioValue("option2")}
              />
              <Radio checked={true} />
              <Radio checked={false} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;secondary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Radio color="secondary" checked={true} />
              <Radio color="secondary" checked={false} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;success&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Radio color="success" checked={true} />
              <Radio color="success" checked={false} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Radio size="small" checked={true} />
              <Radio size="small" checked={false} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;large&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Radio size="large" checked={true} />
              <Radio size="large" checked={false} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>disabled</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Radio disabled checked={true} />
              <Radio disabled checked={false} />
            </div>
          </GridDemo>

          <GridCell>
            <h4 className="text-lg font-bold">RadioGroup</h4>
            <p className="self-baseline">Group of radio buttons</p>
          </GridCell>
          <GridDemo>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                value={radioGroupValue}
                onChange={(e) => setRadioGroupValue(e.target.value)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </GridDemo>

          <GridCell>
            <CodeChip>row</CodeChip> layout
          </GridCell>
          <GridDemo>
            <FormControl>
              <FormLabel>Preferred contact</FormLabel>
              <RadioGroup row defaultValue="email">
                <FormControlLabel
                  value="email"
                  control={<Radio />}
                  label="Email"
                />
                <FormControlLabel
                  value="phone"
                  control={<Radio />}
                  label="Phone"
                />
                <FormControlLabel
                  value="mail"
                  control={<Radio />}
                  label="Mail"
                />
              </RadioGroup>
            </FormControl>
          </GridDemo>

          {/* Rating */}
          <GridCell>
            <h4 className="text-lg font-bold">Rating</h4>
            <p className="self-baseline">Insight and submission of ratings</p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Rating
                value={ratingValue}
                onChange={(_, newValue) => setRatingValue(newValue || 0)}
              />
              <Rating value={4} readOnly />
              <Rating defaultValue={2.5} precision={0.5} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <Rating size="small" defaultValue={3} />
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;large&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <Rating size="large" defaultValue={4} />
          </GridDemo>

          <GridCell>
            <CodeChip>disabled</CodeChip>
          </GridCell>
          <GridDemo>
            <Rating disabled defaultValue={3} />
          </GridDemo>

          <GridCell>
            <CodeChip>readOnly</CodeChip>
          </GridCell>
          <GridDemo>
            <Rating readOnly defaultValue={4.5} precision={0.5} />
          </GridDemo>

          <GridCell>Custom icon</GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Rating
                defaultValue={3}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteIcon fontSize="inherit" />}
              />
              <Rating
                defaultValue={2}
                max={3}
                icon={<StarIcon fontSize="inherit" color="warning" />}
                emptyIcon={<StarIcon fontSize="inherit" />}
              />
            </div>
          </GridDemo>

          {/* Select */}
          <GridCell>
            <h4 className="text-lg font-bold">Select</h4>
            <p className="self-baseline">Collect user info from options list</p>
          </GridCell>
          <GridDemo>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Age</InputLabel>
              <Select
                value={selectAgeValue}
                label="Age"
                onChange={(e) => setSelectAgeValue(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;outlined&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectValue}
                label="Category"
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="books">Books</MenuItem>
                <MenuItem value="music">Music</MenuItem>
                <MenuItem value="movies">Movies</MenuItem>
              </Select>
            </FormControl>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Size</InputLabel>
              <Select defaultValue="medium" label="Size">
                <MenuItem value="small">Small</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="large">Large</MenuItem>
              </Select>
            </FormControl>
          </GridDemo>

          <GridCell>
            <CodeChip>disabled</CodeChip>
          </GridCell>
          <GridDemo>
            <FormControl disabled sx={{ minWidth: 120 }}>
              <InputLabel>Disabled</InputLabel>
              <Select defaultValue="option1" label="Disabled">
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
              </Select>
            </FormControl>
          </GridDemo>

          <GridCell>
            <CodeChip>multiple</CodeChip>
          </GridCell>
          <GridDemo>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Multiple Select</InputLabel>
              <Select
                multiple
                defaultValue={["option1", "option3"]}
                label="Multiple Select"
                renderValue={(selected) => selected.join(", ")}
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
                <MenuItem value="option4">Option 4</MenuItem>
              </Select>
            </FormControl>
          </GridDemo>

          <GridCell>Without label</GridCell>
          <GridDemo>
            <Select defaultValue="value1" sx={{ minWidth: 120 }}>
              <MenuItem value="value1">Value 1</MenuItem>
              <MenuItem value="value2">Value 2</MenuItem>
              <MenuItem value="value3">Value 3</MenuItem>
            </Select>
          </GridDemo>

          {/* Skeleton */}
          <GridCell>
            <h4 className="text-lg font-bold">Skeleton</h4>
            <p className="self-baseline">
              Placeholder preview before data loads
            </p>
          </GridCell>
          <GridDemo>
            <div className="space-y-2">
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;text&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-1">
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "0.875rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;circular&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-3">
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={56} height={56} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;rectangular&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-2">
              <Skeleton variant="rectangular" width={200} height={40} />
              <Skeleton variant="rectangular" width={250} height={80} />
              <Skeleton variant="rectangular" width={180} height={120} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;rounded&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-2">
              <Skeleton variant="rounded" width={200} height={40} />
              <Skeleton variant="rounded" width={250} height={80} />
              <Skeleton variant="rounded" width={180} height={120} />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>animation=&quot;wave&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-2">
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="circular"
                animation="wave"
                width={40}
                height={40}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={210}
                height={60}
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>animation=&quot;pulse&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-2">
              <Skeleton
                variant="text"
                animation="pulse"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="circular"
                animation="pulse"
                width={40}
                height={40}
              />
              <Skeleton
                variant="rectangular"
                animation="pulse"
                width={210}
                height={60}
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>animation=false</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="space-y-2">
              <Skeleton
                variant="text"
                animation={false}
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="circular"
                animation={false}
                width={40}
                height={40}
              />
              <Skeleton
                variant="rectangular"
                animation={false}
                width={210}
                height={60}
              />
            </div>
          </GridDemo>

          <GridCell>Loading card example</GridCell>
          <GridDemo>
            <div className="max-w-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Skeleton variant="circular" width={40} height={40} />
                <div className="flex-1 space-y-1">
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "0.875rem" }}
                    width="60%"
                  />
                </div>
              </div>
              <Skeleton variant="rectangular" height={140} sx={{ mb: 1 }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton
                variant="text"
                sx={{ fontSize: "0.875rem" }}
                width="80%"
              />
            </div>
          </GridDemo>

          {/* Slider */}
          <GridCell>
            <h4 className="text-lg font-bold">Slider</h4>
            <p className="self-baseline">Selections from value ranges</p>
          </GridCell>
          <GridDemo>
            <div className="w-full max-w-xs space-y-4">
              <Slider
                value={sliderValue}
                onChange={(_, value) => setSliderValue(value as number)}
              />
              <Slider defaultValue={50} disabled />
              <Slider
                defaultValue={[20, 37]}
                valueLabelDisplay="auto"
                marks
                min={0}
                max={100}
              />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;secondary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="w-full max-w-xs">
              <Slider defaultValue={30} color="secondary" />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="w-full max-w-xs space-y-4">
              <Slider size="small" defaultValue={40} />
              <Slider size="small" defaultValue={[10, 60]} />
            </div>
          </GridDemo>

          <GridCell>Range slider</GridCell>
          <GridDemo>
            <div className="w-full max-w-xs">
              <Slider
                value={rangeValue}
                onChange={(_, value) => setRangeValue(value as number[])}
                valueLabelDisplay="auto"
              />
            </div>
          </GridDemo>

          {/* Snackbar */}
          <GridCell>
            <h4 className="text-lg font-bold">Snackbar</h4>
            <p className="self-baseline">Brief process notifications</p>
          </GridCell>
          <GridDemo>
            <Button onClick={() => setSnackbarOpen(true)}>Show Snackbar</Button>
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={() => setSnackbarOpen(false)}
              message="This is a snackbar message"
              action={
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => setSnackbarOpen(false)}
                >
                  UNDO
                </Button>
              }
            />
          </GridDemo>

          {/* Stack */}
          <GridCell>
            <h4 className="text-lg font-bold">Stack</h4>
            <p className="self-baseline">
              Arrange elements vertically/horizontally
            </p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Stack direction="row" spacing={2}>
                <div className="bg-blue-100 p-2 rounded">Item 1</div>
                <div className="bg-blue-100 p-2 rounded">Item 2</div>
                <div className="bg-blue-100 p-2 rounded">Item 3</div>
              </Stack>
              <Stack direction="column" spacing={1}>
                <div className="bg-green-100 p-2 rounded">Item A</div>
                <div className="bg-green-100 p-2 rounded">Item B</div>
                <div className="bg-green-100 p-2 rounded">Item C</div>
              </Stack>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>divider</CodeChip>
          </GridCell>
          <GridDemo>
            <Stack
              direction="row"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <div className="bg-gray-100 p-2 rounded">Item 1</div>
              <div className="bg-gray-100 p-2 rounded">Item 2</div>
              <div className="bg-gray-100 p-2 rounded">Item 3</div>
            </Stack>
          </GridDemo>

          {/* Stepper */}
          <GridCell>
            <h4 className="text-lg font-bold">Stepper</h4>
            <p className="self-baseline">Progress through numbered steps</p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <Stepper
                activeStep={stepperActiveStep}
                sx={{ width: "100%", maxWidth: 400 }}
              >
                <Step>
                  <StepLabel>Select campaign settings</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Create an ad group</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Create an ad</StepLabel>
                </Step>
              </Stepper>
              <div className="flex gap-2">
                <Button
                  disabled={stepperActiveStep === 0}
                  onClick={() => setStepperActiveStep(stepperActiveStep - 1)}
                >
                  Back
                </Button>
                <Button
                  disabled={stepperActiveStep === 2}
                  onClick={() => setStepperActiveStep(stepperActiveStep + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>orientation=&quot;vertical&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <Stepper
              activeStep={1}
              orientation="vertical"
              sx={{ width: "100%", maxWidth: 400 }}
            >
              <Step>
                <StepLabel>Select campaign settings</StepLabel>
                <StepContent>
                  <Typography>
                    Set up your campaign settings and choose your targeting
                    options.
                  </Typography>
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Create an ad group</StepLabel>
                <StepContent>
                  <Typography>
                    Create ad groups to organize your ads by theme.
                  </Typography>
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Create an ad</StepLabel>
                <StepContent>
                  <Typography>
                    Write compelling ad copy and choose your landing page.
                  </Typography>
                </StepContent>
              </Step>
            </Stepper>
          </GridDemo>

          {/* Switch */}
          <GridCell>
            <h4 className="text-lg font-bold">Switch</h4>
            <p className="self-baseline">Toggle single setting on/off</p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Switch
                checked={switchChecked}
                onChange={(e) => setSwitchChecked(e.target.checked)}
              />
              <Switch defaultChecked />
              <Switch disabled />
              <Switch disabled checked />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;secondary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Switch defaultChecked color="secondary" />
              <Switch defaultChecked color="error" disabled />
              <Switch defaultChecked color="success" />
              <Switch defaultChecked color="warning" />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Switch size="small" defaultChecked />
              <Switch size="medium" defaultChecked />
            </div>
          </GridDemo>

          <GridCell>With labels</GridCell>
          <GridDemo>
            <div className="flex gap-8">
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="WiFi"
              />
              <FormControlLabel control={<Switch />} label="Bluetooth" />
              <FormControlLabel
                disabled
                control={<Switch />}
                label="Location Services"
              />
            </div>
          </GridDemo>

          {/* Icons */}
          <GridCell>
            <h4 className="text-lg font-bold">Icons</h4>
            <p className="self-baseline">Material UI icons and SvgIcon</p>
          </GridCell>
          <GridDemo>
            <div className="space-y-4">
              <div>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  @mui/icons-material
                </Typography>
                <div className="flex items-center gap-4 flex-wrap">
                  <HomeIcon />
                  <SettingsIcon />
                  <NotificationsIcon />
                  <EmailIcon />
                  <PhoneIcon />
                  <LocationOnIcon />
                  <PersonIcon />
                  <StarIcon />
                  <FavoriteIcon />
                  <ShareIcon />
                </div>
              </div>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;primary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4 flex-wrap">
              <HomeIcon color="primary" />
              <SettingsIcon color="primary" />
              <NotificationsIcon color="primary" />
              <EmailIcon color="primary" />
              <PhoneIcon color="primary" />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;secondary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4 flex-wrap">
              <HomeIcon color="secondary" />
              <SettingsIcon color="secondary" />
              <NotificationsIcon color="secondary" />
              <EmailIcon color="secondary" />
              <PhoneIcon color="secondary" />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>fontSize=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4 flex-wrap">
              <HomeIcon fontSize="small" />
              <SettingsIcon fontSize="small" />
              <NotificationsIcon fontSize="small" />
              <EmailIcon fontSize="small" />
              <PhoneIcon fontSize="small" />
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>fontSize=&quot;large&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4 flex-wrap">
              <HomeIcon fontSize="large" />
              <SettingsIcon fontSize="large" />
              <NotificationsIcon fontSize="large" />
              <EmailIcon fontSize="large" />
              <PhoneIcon fontSize="large" />
            </div>
          </GridDemo>

          <GridCell>
            <h4 className="text-lg font-bold">SvgIcon</h4>
            <p className="self-baseline">Custom SVG icons</p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4 flex-wrap">
              <SvgIcon>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
              <SvgIcon color="primary">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </SvgIcon>
              <SvgIcon color="secondary">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </SvgIcon>
              <SvgIcon fontSize="large">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
              </SvgIcon>
            </div>
          </GridDemo>

          {/* Table */}
          <GridCell>
            <h4 className="text-lg font-bold">Table</h4>
            <p className="self-baseline">Display sets of data</p>
          </GridCell>
          <GridDemo>
            <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Frozen yoghurt
                    </TableCell>
                    <TableCell align="right">159</TableCell>
                    <TableCell align="right">6.0</TableCell>
                    <TableCell align="right">24</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Ice cream sandwich
                    </TableCell>
                    <TableCell align="right">237</TableCell>
                    <TableCell align="right">9.0</TableCell>
                    <TableCell align="right">37</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Eclair
                    </TableCell>
                    <TableCell align="right">262</TableCell>
                    <TableCell align="right">16.0</TableCell>
                    <TableCell align="right">24</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </GridDemo>

          {/* Tabs */}
          <GridCell>
            <h4 className="text-lg font-bold">Tabs</h4>
            <p className="self-baseline">Explore and switch between views</p>
          </GridCell>
          <GridDemo>
            <div className="w-full max-w-md">
              <Tabs
                value={tabValue}
                onChange={(_, newValue) => setTabValue(newValue)}
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
              <div className="p-3">
                {tabValue === 0 && <Typography>Item One Content</Typography>}
                {tabValue === 1 && <Typography>Item Two Content</Typography>}
                {tabValue === 2 && <Typography>Item Three Content</Typography>}
              </div>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>variant=&quot;scrollable&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <Tabs variant="scrollable" scrollButtons="auto" value={0}>
              <Tab label="Tab One" />
              <Tab label="Tab Two" />
              <Tab label="Tab Three" />
              <Tab label="Tab Four" />
              <Tab label="Tab Five" />
              <Tab label="Tab Six" />
              <Tab label="Tab Seven" />
            </Tabs>
          </GridDemo>

          <GridCell>
            <CodeChip>orientation=&quot;vertical&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <div className="flex h-48">
              <Tabs
                orientation="vertical"
                value={1}
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
              <div className="flex-1 p-3">
                <Typography>Vertical Tab Content</Typography>
              </div>
            </div>
          </GridDemo>

          {/* Toggle Button */}
          <GridCell>
            <h4 className="text-lg font-bold">Toggle Button</h4>
            <p className="self-baseline">Group related options</p>
          </GridCell>
          <GridDemo>
            <div className="space-x-4">
              <ToggleButtonGroup
                size="small"
                value={toggleAlignment}
                exclusive
                onChange={(_, value) => value && setToggleAlignment(value)}
              >
                <ToggleButton value="left">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right">
                  <FormatAlignRightIcon />
                </ToggleButton>
              </ToggleButtonGroup>

              <ToggleButtonGroup
                value={toggleValue}
                onChange={(_, value) => setToggleValue(value)}
              >
                <ToggleButton value="bold">
                  <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic">
                  <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined">
                  <FormatUnderlinedIcon />
                </ToggleButton>
              </ToggleButtonGroup>

              <ToggleButtonGroup
                size="large"
                value={toggleValue}
                onChange={(_, value) => setToggleValue(value)}
              >
                <ToggleButton value="bold">
                  <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic">
                  <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined">
                  <FormatUnderlinedIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>color=&quot;primary&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <ToggleButtonGroup color="primary" value="bold" exclusive>
              <ToggleButton value="bold">Bold</ToggleButton>
              <ToggleButton value="italic">Italic</ToggleButton>
              <ToggleButton value="underlined">Underlined</ToggleButton>
            </ToggleButtonGroup>
          </GridDemo>

          <GridCell>
            <CodeChip>size=&quot;small&quot;</CodeChip>
          </GridCell>
          <GridDemo>
            <ToggleButtonGroup size="small" value="left" exclusive>
              <ToggleButton value="left">Left</ToggleButton>
              <ToggleButton value="center">Center</ToggleButton>
              <ToggleButton value="right">Right</ToggleButton>
            </ToggleButtonGroup>
          </GridDemo>

          {/* Tooltip */}
          <GridCell>
            <h4 className="text-lg font-bold">Tooltip</h4>
            <p className="self-baseline">Informative text on hover/focus</p>
          </GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Tooltip title="Delete">
                <Button>
                  <DeleteIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Add" arrow>
                <Button>
                  <AddIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Edit" placement="top">
                <Button>
                  <EditIcon />
                </Button>
              </Tooltip>
            </div>
          </GridDemo>

          <GridCell>
            <CodeChip>placement</CodeChip> variants
          </GridCell>
          <GridDemo>
            <div className="grid grid-cols-3 gap-4 p-8">
              <Tooltip title="Top Start" placement="top-start">
                <Button>Top Start</Button>
              </Tooltip>
              <Tooltip title="Top" placement="top">
                <Button>Top</Button>
              </Tooltip>
              <Tooltip title="Top End" placement="top-end">
                <Button>Top End</Button>
              </Tooltip>
              <Tooltip title="Left" placement="left">
                <Button>Left</Button>
              </Tooltip>
              <Button disabled>Center</Button>
              <Tooltip title="Right" placement="right">
                <Button>Right</Button>
              </Tooltip>
              <Tooltip title="Bottom Start" placement="bottom-start">
                <Button>Bottom Start</Button>
              </Tooltip>
              <Tooltip title="Bottom" placement="bottom">
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip title="Bottom End" placement="bottom-end">
                <Button>Bottom End</Button>
              </Tooltip>
            </div>
          </GridDemo>

          <GridCell>Custom styling</GridCell>
          <GridDemo>
            <div className="flex items-center gap-4">
              <Tooltip
                title="Styled Tooltip"
                arrow
                sx={{
                  "& .MuiTooltip-tooltip": {
                    bgcolor: "common.black",
                    "& .MuiTooltip-arrow": {
                      color: "common.black",
                    },
                  },
                }}
              >
                <Button variant="outlined">Black Tooltip</Button>
              </Tooltip>
              <Tooltip
                title="Success Message"
                arrow
                slotProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "success.main",
                      color: "success.contrastText",
                      "& .MuiTooltip-arrow": {
                        color: "success.main",
                      },
                    },
                  },
                }}
              >
                <Button variant="outlined">Success Tooltip</Button>
              </Tooltip>
            </div>
          </GridDemo>
        </GridContainer>
      </div>
    </AppTheme>
  );
}

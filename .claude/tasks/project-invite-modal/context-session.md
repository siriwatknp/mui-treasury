# Context Session: Project Invite Modal

## Visual Design Analysis

### Container Structure

The component is a modal dialog with a clean white background and subtle shadow, featuring:

- Header section with icon and title
- Link sharing section
- Email invitation section
- Project members list
- Footer with action buttons

### Section 1: Header

**Key Components:**

- User/group icon with plus indicator
- Title: "Invite to Project"
- Subtitle: "Collaborate with members on this project."
- Close button (X icon) in top-right corner

**Theme Mapping:**

- Typography: Title uses larger font size (heading), subtitle uses body text with secondary color
- Icon color: text.icon with primary accent
- Spacing: Moderate padding around header content

**Layout:**

- Flexbox row with space-between for icon/text and close button
- Icon and text grouped together on left side

**ASCII Mockup:**

```
┌─────────────────────────────────────────────────┐
│ [👥+] Invite to Project                      [X] │
│       Collaborate with members on this project.  │
├─────────────────────────────────────────────────┤
```

### Section 2: Link Sharing

**Key Components:**

- Section title: "Link to Share"
- Subtitle: "Anyone with the link can access"
- Dropdown selector: "Anyone with link"
- URL input field with copy button

**Theme Mapping:**

- TextField variant: outlined
- Button variant: text (for Copy button)
- Typography: section title uses subtitle1, descriptions use body2
- Border: divider between sections

**Layout:**

- Stack layout with consistent spacing
- Full-width TextField with embedded copy action

**ASCII Mockup:**

```
│ Link to Share                                    │
│ Anyone with the link can access                  │
│                                                   │
│ ┌─────────────────────────────────────┐          │
│ │ https://www.figma.com/designProject │ [Copy]  │
│ └─────────────────────────────────────┘          │
```

### Section 3: Email Invitation

**Key Components:**

- Section title: "Email"
- Email input with X button to clear
- Permission dropdown: "Can View"
- "Send Invite" button (contained variant)

**Theme Mapping:**

- TextField variant: outlined
- Button variant: contained with dark background
- Select variant: outlined
- Spacing: gap between input and button

**Layout:**

- Flexbox row with email input, select dropdown, and button
- Email takes most space, fixed width for dropdown and button

**ASCII Mockup:**

```
│ Email                                            │
│ ┌──────────────────┬────────────┬──────────────┐│
│ │ Johndoe@gmail.com│ Can View ▼ │ Send Invite  ││
│ └──────────────────┴────────────┴──────────────┘│
```

### Section 4: Project Members

**Key Components:**

- Section title: "Project Members"
- Member list with:
  - Avatar (circular profile image)
  - Name and email
  - Permission dropdown (Owner/Can View/Can Edit)

**Theme Mapping:**

- Avatar: standard size with image
- Typography: name uses body1, email uses body2 with secondary color
- Select variant: text (borderless dropdown)
- Spacing: consistent vertical spacing between members

**Layout:**

- List layout with each item as flexbox row
- Avatar, text group, and permission selector aligned horizontally

**ASCII Mockup:**

```
│ Project Members                                  │
│                                                   │
│ [👤] Insan Kamil                      Owner ▼    │
│      insank@gmail.com                            │
│                                                   │
│ [👤] John Smith                    Can View ▼    │
│      johnsmith@gmail.com                         │
│                                                   │
│ [👤] Mario Rodriguez               Can Edit ▼    │
│      mariorodriguez@gmail.com                    │
│                                                   │
│ [👤] Emily Chen                    Can Edit ▼    │
│      emilychen@gmail.com                         │
```

### Section 5: Footer Actions

**Key Components:**

- "Get embed code" link with icon
- "Export" button with icon

**Theme Mapping:**

- Button variant: text for both actions
- Icon integration: inline with text
- Typography: body2
- Color: default text color

**Layout:**

- Flexbox row with gap between actions
- Left alignment

**ASCII Mockup:**

```
│ [<>] Get embed code    [↗] Export               │
└─────────────────────────────────────────────────┘
```

## Accessibility Attention Points

### Focus Management

- Modal should trap focus within the dialog
- Tab order: Close button → Link dropdown → URL field → Copy button → Email input → Permission dropdown → Send button → Member permission dropdowns → Footer actions
- Escape key should close the modal

### ARIA Attributes

- Dialog role with aria-labelledby pointing to the title
- aria-describedby for subtitle text
- Proper labeling for all form inputs
- aria-label for icon buttons (close, copy)
- Live region for copy success feedback

### Form Controls

- Email input needs proper type="email" and validation
- Select dropdowns need proper labels
- Clear visual focus indicators on all interactive elements
- Error states for invalid email format

### Screen Reader Considerations

- Member list should be announced as a list
- Permission changes should provide feedback
- Copy action should announce success
- Avatar images need alt text with member names

## Implementation Notes

- Modal should use MUI Dialog component
- Form validation for email before sending invite
- Copy functionality with visual feedback
- Responsive design considerations for mobile viewports
- Permission dropdowns should show available options based on user's role

## Implementation Summary

- **Dialog Component**: Used MUI Dialog with DialogTitle and DialogContent for modal structure
- **Header Section**: Implemented with GroupAddIcon and close button positioned absolutely
- **Link Sharing**: Full-width Select dropdown with outlined TextField containing copy button as endAdornment
- **Email Invitation**: TextField with clear button, Select dropdown for permissions, and contained Button with dark theme
- **Project Members**: Avatar components with member info and borderless Select dropdowns for permissions
- **Footer Actions**: Text buttons with icons for embed code and export features
- **State Management**: Controlled components for email, permissions, and copy feedback
- **Accessibility**: Proper aria-labels, focus management, and keyboard navigation support
- **Theme Integration**: Used theme callbacks for dark mode support and text.icon color token
